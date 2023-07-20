import { useState, useEffect, useRef, useCallback } from "react";
import {
  Form,
  useActionData,
  useSearchParams,
  useTransition,
  useFetcher,
  useLocation,
  useNavigate,
} from "@remix-run/react";
import * as Dialog from "@app/components/dialog";
import { cx } from "classix";
import { toast } from "react-toastify";
import { CategoryType } from "@domain/category";
import { Issue, defaultIssuesIds } from "@domain/issue";
import { Comment, CommentId } from "@domain/comment";
import { useUserStore } from "@app/store/user.store";
import { ActionData as IssueActionData } from "@app/routes/__main/projects.$projectId/board/issue/$issueId";
import { UserAvatar } from "@app/components/user-avatar";
import { Title } from "@app/components/title";
import { Description } from "@app/components/description";
import { Kbd } from "@app/components/kbd-placeholder";
import { formatDateTime } from "@utils/formatDateTime";
import { PanelHeaderIssue } from "./panel-header-issue";
import { CreateComment } from "./comment/create-comment";
import { ViewComment } from "./comment/view-comment";
import { SelectStatus } from "./select-status";
import { SelectPriority } from "./select-priority";
import { SelectAsignee } from "./select-asignee";

export const IssuePanel = ({ issue }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);
  const [comments, setComments] = useState<Comment[]>(issue?.comments || []);
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(
    null
  );
  const { user } = useUserStore();
  const reporter = issue ? issue.reporter : user;
  const formRef = useRef<HTMLFormElement>(null);
  const actionData = useActionData() as IssueActionData;
  const fetcher = useFetcher();
  const params = useSearchParams();
  const transition = useTransition();
  const location = useLocation();
  const navigate = useNavigate();
  const initStatus = (params[0].get("category") as CategoryType) || "TODO";
  const userIsNotReporter = user.id !== reporter.id;

  const postData = useCallback(
    (formTarget: HTMLFormElement) => {
      const isExistingIssue = Boolean(issue?.id);
      const formData = new FormData(formTarget);
      const action = isExistingIssue ? "update" : "create";
      formData.set("comments", JSON.stringify(comments));
      formData.set("_action", action);

      fetcher.submit(formData, {
        method: "post",
      });
    },
    [comments, fetcher]
  );

  const handleProgrammaticSubmit = useCallback((): void => {
    if (formRef.current) {
      postData(formRef.current);
    }
  }, [postData]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.shiftKey && e.key.toLowerCase() === "s") {
        e.preventDefault();
        handleProgrammaticSubmit();
      }
    },
    [handleProgrammaticSubmit]
  );

  const handleFormSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postData(e.currentTarget);
  };

  const handleProgrammaticClose = () => {
    setIsOpen(false);
  };

  const addComment = (newComment: Comment): void => {
    setComments([...comments, newComment]);
  };

  const removeComment = (commentId: CommentId): void => {
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(updatedComments);
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        const previousUrl = location.pathname.split("/issue")[0];
        navigate(previousUrl);
      }, 300);
    }
  }, [isOpen, navigate, location.pathname]);

  useEffect(() => {
    const formAction = fetcher.formData?.get("_action");

    if (fetcher.type === "actionRedirect" && formAction === "create") {
      toast.success("Issue created successfully");
    }
  }, [fetcher.type]);

  return (
    <>
      <Dialog.Root open={true}>
        <Dialog.Portal container={portalContainer}>
          <Dialog.Overlay className={isOpen ? "" : "bg-opacity-0"}>
            <Dialog.Content
              onEscapeKeyDown={handleProgrammaticClose}
              onPointerDownOutside={handleProgrammaticClose}
              className={isOpen ? "" : "translate-y-[10px] opacity-0"}
            >
              <PanelHeaderIssue
                id={issue?.id || "Create new issue"}
                deleteDisabled={
                  userIsNotReporter ||
                  defaultIssuesIds.includes(issue?.id || "")
                }
              />
              <Form method="post" onSubmit={handleFormSumbit} ref={formRef}>
                <div className="grid grid-cols-5 gap-16">
                  <section className="col-span-3">
                    <Dialog.Title className="my-5 -ml-3">
                      <Title
                        initTitle={issue?.name || ""}
                        readOnly={userIsNotReporter}
                        error={actionData?.errors?.name}
                      />
                    </Dialog.Title>
                    <p className="font-primary-black text-font-main dark:text-font-main-dark">
                      Description
                    </p>
                    <div className="-ml-3">
                      <Description
                        initDescription={issue?.description || ""}
                        readOnly={userIsNotReporter}
                      />
                    </div>
                    <div className="mt-6">
                      <p className="font-primary-black text-font-main dark:text-font-main-dark">
                        Comments
                      </p>
                      <div>
                        <CreateComment addComment={addComment} />
                      </div>
                      <ul className="mt-8 space-y-6">
                        {comments.map((comment) => (
                          <li key={comment.id}>
                            <ViewComment
                              comment={comment}
                              removeComment={removeComment}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>
                  <section className="col-span-2 space-y-10 dark:text-font-light-dark">
                    <div>
                      <p className="mb-1">Status</p>
                      <SelectStatus
                        initStatus={issue?.categoryType || initStatus}
                      />
                    </div>
                    <div>
                      <p className="mb-1">Priority</p>
                      <SelectPriority
                        initPriority={issue?.priority.id || "low"}
                      />
                    </div>
                    <div>
                      <p className="mb-1">Asignee</p>
                      <SelectAsignee initAsignee={issue?.asignee || user} />
                    </div>
                    <div>
                      <p className="mb-1">Reporter</p>
                      <div className="mt-1 flex w-fit items-center gap-2 rounded-full bg-grey-300 py-1 pl-1 pr-3.5 pb-1 dark:bg-dark-500">
                        <UserAvatar {...reporter} />
                        <input
                          type="hidden"
                          name="reporter"
                          value={reporter.id}
                        />
                        <p className="m-0">{reporter.name}</p>
                      </div>
                    </div>
                    <div>
                      <CreatedUpdatedAt issue={issue} />
                    </div>
                  </section>
                </div>
                <div className="mt-6 grid grid-cols-3 items-end">
                  <span className="font-primary-light text-2xs text-font-light text-opacity-80 dark:text-font-light-dark">
                    Press <Kbd>Shift</Kbd> + <Kbd>S</Kbd> to accept
                  </span>
                  <button
                    type="submit"
                    className="flex w-fit cursor-pointer items-center gap-4 justify-self-center rounded border-none bg-primary-main py-2 px-8 font-primary-bold text-lg text-white enabled:hover:bg-primary-main-hover disabled:cursor-not-allowed disabled:opacity-60"
                    disabled={transition.state !== "idle"}
                    aria-label="Accept changes"
                  >
                    {transition.state !== "idle" ? (
                      <>
                        Submmiting
                        <Spinner />
                      </>
                    ) : (
                      "Accept"
                    )}
                  </button>
                  <span className="justify-self-end font-primary-light text-2xs text-font-light text-opacity-80 dark:text-font-light-dark">
                    Press <Kbd>Esc</Kbd> to close
                  </span>
                </div>
              </Form>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
      {/* To avoid hydration issues because a missmatch with the server*/}
      <div
        ref={setPortalContainer}
        className="fixed top-0 left-0 w-full h-full z-50"
      />
    </>
  );
};

interface Props {
  issue?: Issue;
}

const CreatedUpdatedAt = ({ issue }: Props): JSX.Element => {
  const values = [
    { label: "Created at:", value: issue?.createdAt },
    { label: "Updated at:", value: issue?.updatedAt },
  ];

  return (
    <table>
      <tbody className="text-sm">
        {values.map(({ label, value }) => (
          <tr key={label}>
            <td className="pr-4">
              <p className="mb-2">{label}</p>
            </td>
            <td>
              <p className="mb-2 text-white">
                {value ? formatDateTime(value) : "Just now"}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Spinner = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="dark:text-gray-600 mr-2 inline-block h-5 w-5 animate-spin fill-grey-600"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="currentBaseColor"
    />
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentColor"
    />
  </svg>
);
