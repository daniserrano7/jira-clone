import { Error500 } from "@app/components/error-500";

export const loader = async () => {
  throw new Error("Fail from Error500Route");
};

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  const errorMessage =
    "The Server error page failed. This is an example of a server error page (check network tab). Navigate to the board page";

  return (
    <div className="flex h-full items-center justify-center">
      <Error500 message={errorMessage} href="board" />
    </div>
  );
}

export default function Error500Route() {
  return <div>This will never show because of the server error 500</div>;
}

//  -^-
//   O
//  /|\  -> Felicidad
//  / \
