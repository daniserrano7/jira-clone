import { Comment } from "@domain/comment";
import { useAppStore } from "@app/views/app";
import { useProjectStore } from "@app/views/app/project";
import { UserAvatar } from "@app/components/avatar";
import { EditBox } from "./edit-box";

export const CreateComment = ({
  addComment,
}: CreateCommentProps): JSX.Element => {
  const { user } = useAppStore();
  const projectStore = useProjectStore();

  const save = (message: string) => {
    const issue = projectStore.editingIssue;

    if (!issue) {
      throw new Error("No issue to edit");
    }

    const comment = new Comment({
      id: "1",
      user,
      message,
    });
    addComment(comment);
    // addCommentDb(comment, issue.id);
  };

  return (
    <div className="mt-4 flex items-start gap-6">
      <UserAvatar {...user} tooltip={false} />
      <EditBox defaultMessage="" save={save} />
    </div>
  );
};

interface CreateCommentProps {
  addComment: (comment: Comment) => void;
}
