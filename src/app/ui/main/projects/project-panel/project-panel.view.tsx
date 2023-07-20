import { useState, useEffect, useRef, useCallback } from "react";
import { Form, useNavigate, useFetcher, useActionData } from "@remix-run/react";
import * as Dialog from "@app/components/dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import cx from "classix";
import { BsCheckLg } from "react-icons/bs";
import { User } from "@domain/user";
import { Project } from "@domain/project";
import { ActionData as ProjectActionData } from "@app/routes/__main/projects/new";
import { useUserStore } from "@app/store/user.store";
import { UserAvatar } from "@app/components/user-avatar";
import { Title } from "@app/components/title";
import { Description } from "@app/components/description";
import { Kbd } from "@app/components/kbd-placeholder";
import { PanelHeaderProject } from "./panel-header-project";

export const ProjectPanelView = ({ project, users }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(
    null
  );
  const formRef = useRef<HTMLFormElement>(null);
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const actionData = useActionData() as ProjectActionData;
  const { user: loggedUser } = useUserStore();

  const postData = useCallback(
    (formTarget: HTMLFormElement) => {
      const formData = new FormData(formTarget);
      formData.set("_action", "upsert");

      fetcher.submit(formData, {
        method: "post",
      });
    },
    [fetcher]
  );

  const handleProgrammaticSubmit = useCallback((): void => {
    if (formRef.current) {
      postData(formRef.current);
    }
  }, [postData]);

  const handleProgrammaticClose = (): void => {
    setIsOpen(false);
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.shiftKey && e.key.toLowerCase() === "s") {
        e.preventDefault();
        handleProgrammaticSubmit();
      }
    },
    [handleProgrammaticSubmit]
  );

  useEffect(() => {
    const isErrors =
      actionData?.errors && Object.keys(actionData?.errors).length > 0;

    if (isErrors) {
      document
        .getElementById("project-panel-overlay")
        ?.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [actionData]);

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => navigate("/projects"), 300);
    }
  }, [isOpen, navigate]);

  return (
    <>
      <Dialog.Root open={true}>
        <Dialog.Portal container={portalContainer}>
          <Dialog.Overlay
            id="project-panel-overlay"
            className={isOpen ? "" : "bg-opacity-0"}
          >
            <Dialog.Content
              onEscapeKeyDown={handleProgrammaticClose}
              onPointerDownOutside={handleProgrammaticClose}
              className={cx(
                "max-w-[600px]",
                !isOpen && "translate-y-[10px] opacity-0"
              )}
            >
              <PanelHeaderProject id={project?.id || "Create new project"} />
              <Form method="post" ref={formRef}>
                <div className="mb-6">
                  <Dialog.Title className="mt-5 mb-8 -ml-3">
                    <Title
                      initTitle={project?.name || ""}
                      maxLength={30}
                      error={actionData?.errors?.name}
                    />
                  </Dialog.Title>
                  <p className="font-primary-black text-font-main dark:text-font-main-dark">
                    Description
                  </p>
                  <div className="-ml-3 mb-5">
                    <Description initDescription={project?.description || ""} />
                  </div>
                  <ul className="space-y-1.5">
                    {users.map((user) => (
                      <li
                        key={user.id}
                        className="-mx-2 rounded-lg px-2 outline outline-2 outline-transparent duration-75 ease-linear hover:bg-grey-300 hover:outline-primary-main dark:hover:bg-dark-200 dark:hover:outline-primary-main-dark"
                      >
                        <label
                          htmlFor={`checkbox-${user.id}`}
                          className="flex w-full cursor-pointer items-center justify-between gap-4 py-3"
                        >
                          <span className="flex items-center gap-4">
                            <UserAvatar {...user} size={48} />
                            <span>{user.name}</span>
                          </span>
                          <Checkbox.Root
                            id={`checkbox-${user.id}`}
                            className="h-[36px] w-[36px] rounded-md bg-white dark:bg-dark-500"
                            name="user"
                            value={user.id}
                            defaultChecked={user.id === loggedUser?.id}
                          >
                            <Checkbox.Indicator className="flex h-[36px] w-[36px] rounded-md bg-primary-main duration-150 ease-in flex-center">
                              <BsCheckLg size={16} className="text-grey-400" />
                            </Checkbox.Indicator>
                          </Checkbox.Root>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 grid grid-cols-3 items-end">
                  <span className="font-primary-light text-2xs text-font-light text-opacity-80 dark:text-font-light-dark">
                    Press <Kbd>Shift</Kbd> + <Kbd>S</Kbd> to accept
                  </span>
                  <button
                    type="submit"
                    name="_action"
                    value="upsert"
                    className="flex w-fit cursor-pointer items-center gap-4 justify-self-center rounded border-none bg-primary-main py-2 px-8 font-primary-bold text-lg text-white enabled:hover:bg-primary-main-hover disabled:cursor-not-allowed disabled:opacity-60"
                    disabled={fetcher.state !== "idle"}
                    aria-label="Accept changes"
                  >
                    {fetcher.state !== "idle" ? (
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
  project?: Project;
  users: User[];
}

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
