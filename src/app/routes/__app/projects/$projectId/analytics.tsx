import { AnalyticsView } from "@app/views/app/project/analytics";
import { Error500 } from "@app/components/error-500";

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  const errorMessage = "The analytics page failed. Navigate to the board page";

  return (
    <div className="pt-[100px]">
      <Error500 message={errorMessage} href="board" />
    </div>
  );
}

export default function AnalyticsRoute() {
  return <AnalyticsView />;
}
