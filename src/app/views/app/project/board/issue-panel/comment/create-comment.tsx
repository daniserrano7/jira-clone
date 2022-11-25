import { v4 as uuid } from "uuid";
import { CommentData } from "@domain/comment";
import { useAppStore } from "@app/views/app";
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
  addComment: (comment: CommentData) => void;
}
