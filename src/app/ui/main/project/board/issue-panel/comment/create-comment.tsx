import { v4 as uuid } from "uuid";
import { Comment } from "@domain/comment";
import { useAppStore } from "@app/ui/main";
import { UserAvatar } from "@app/components/avatar";
import { EditBox } from "./edit-box";

export const CreateComment = ({
  addComment,
}: CreateCommentProps): JSX.Element => {
  const { user } = useAppStore();

  const save = (message: string) => {
    addComment({
      id: uuid(),
      user,
      message,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
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
