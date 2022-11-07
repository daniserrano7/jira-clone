import { useEffect, useState, useRef } from 'react';
import styles from './textarea-autosize.module.scss';

export const TextareaAutosize = (props: TitleProps): JSX.Element => {
  const { value, setValue, placeholder, autofocus, onFocus, onBlur } = props;

  const [textareaHeight, setTextareaHeight] = useState<number>(40);
  const textareaRef = useRef<HTMLParagraphElement>(null);

  const handleOnFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const target = e.currentTarget;
    const length = target.value.length;
    // Place cursor at the end of the current text
    target.setSelectionRange(length, length);
    if (onFocus) onFocus();
  };

  const handleTitleChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    const value = e.currentTarget.value;
    setValue(value);
  };

  const valueIsNotOnlySpaces = (): boolean => {
    return !/^( )\1*$/.test(value);
  };

  useEffect(() => {
    if (!textareaRef.current) return;

    setTextareaHeight(textareaRef.current.scrollHeight);
  }, [value]);

  return (
    <div className={styles.container}>
      <textarea
        value={value}
        onChange={handleTitleChange}
        placeholder={placeholder}
        onFocus={handleOnFocus}
        onBlur={onBlur}
        style={{ height: `${textareaHeight}px` }}
        autoFocus={autofocus}
      />
      <p ref={textareaRef}>{(valueIsNotOnlySpaces() && value) || placeholder}</p>
    </div>
  );
};

interface TitleProps {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  autofocus?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}
