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
import { toast } from "react-toastify";
import { CategoryType } from "@domain/category";
import { Issue, defaultIssuesIds } from "@domain/issue";
import { Comment, CommentId } from "@domain/comment";
import { useUserStore } from "@app/store/user.store";
import { ActionData as IssueActionData } from "@app/routes/__main/projects.$projectId/board/issue/$issueId";
import { UserAvatar } from "@app/components/user-avatar";
import { Button } from "@app/components/button";
import { Title } from "@app/components/title";
import { Description } from "@app/components/description";
import { Kbd } from "@app/components/kbd-placeholder";
import { PanelHeaderIssue } from "./panel-header-issue";
import { CreateComment } from "./comment/create-comment";
import { ViewComment } from "./comment/view-comment";
import { SelectStatus } from "./select-status";
import { SelectPriority } from "./select-priority";
import { SelectAsignee } from "./select-asignee";
import { CreatedUpdatedAt } from "./created-updated-at";
import { Spinner } from "./spinner";

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
    [comments, fetcher, issue?.id]
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
  }, [fetcher.type, fetcher.formData]);

  return (
    <>
      <Dialog.Root open={true}>
        <Dialog.Portal container={portalContainer}>
          <Dialog.Overlay>
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
                    <div className="my-5 -ml-3 mb-6">
                      <Dialog.Title asChild>
                        <Title
                          initTitle={issue?.name || ""}
                          readOnly={userIsNotReporter}
                          error={actionData?.errors?.name}
                        />
                      </Dialog.Title>
                    </div>
                    <p className="font-primary-black text-font">Description</p>
                    <div className="-ml-3 mb-6">
                      <Description
                        initDescription={issue?.description || ""}
                        readOnly={userIsNotReporter}
                      />
                    </div>
                    <div>
                      <p className="font-primary-black text-font">Comments</p>
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
                  <section className="col-span-2 space-y-10">
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
                      <div className="mt-1 flex w-fit items-center gap-2 rounded-full bg-background-neutral py-1 pb-1 pl-1 pr-3.5">
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
                  <span className="font-primary-light text-2xs text-font-subtlest text-opacity-80">
                    Press <Kbd>Shift</Kbd> + <Kbd>S</Kbd> to accept
                  </span>
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-fit"
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
                    </Button>
                  </div>
                  <span className="justify-self-end font-primary-light text-2xs text-font-subtlest text-opacity-80">
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
        className="fixed left-0 top-0 z-50 h-full w-full"
      />
    </>
  );
};

interface Props {
  issue?: Issue;
}
