import { Issue } from "@domain/issue";
import { formatDateTime } from "@utils/formatDateTime";

export const CreatedUpdatedAt = ({ issue }: Props): JSX.Element => {
  const values = [
    { label: "Created at:", value: issue?.createdAt },
    { label: "Updated at:", value: issue?.updatedAt },
  ];

  return (
    <table>
      <tbody className="text-xs text-font-subtlest">
        {values.map(({ label, value }) => (
          <tr key={label}>
            <td className="pr-4">
              <p className="mb-2">{label}</p>
            </td>
            <td>
              <p className="mb-2">
                {value ? formatDateTime(value) : "Just now"}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

interface Props {
  issue?: Issue;
}
