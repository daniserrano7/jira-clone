import { useState } from 'react'
import { TextareaAutosize } from '../../textarea-autosize'
import { textAreOnlySpaces } from '../../utils'
import styles from './edit-box.module.scss'

export const EditBox = ({
    defaultMessage,
    autofocus,
    save,
    cancel,
}: EditBoxProps): JSX.Element => {
    const [message, setMessage] = useState<string>(defaultMessage)
    const [initError, setInitError] = useState<boolean>(false)
    const [isEditing, setIsEditing] = useState<boolean>(false)

    const messageIsValid = (): boolean => {
        return message.length > 0 && !textAreOnlySpaces(message)
    }

    const resetValues = () => {
        setMessage(defaultMessage)
        setInitError(false)
        setIsEditing(false)
    }

    const onSave = () => {
        if (messageIsValid()) {
            save(message)
            resetValues()
        } else {
            setInitError(true)
        }
    }

    const onCancel = () => {
        resetValues()
        cancel()
    }

    const onFocus = () => setIsEditing(true)

    const isError = initError && !messageIsValid()
    const errorStyles = isError ? styles.error : undefined
    const editingStyles = isEditing ? styles.editing : undefined
    const placeholder = isError
        ? 'Message cannot be empty'
        : 'Add your comment...'

    return (
        <div className={`${styles.container} ${errorStyles}`}>
            <TextareaAutosize
                value={message}
                setValue={setMessage}
                placeholder={placeholder}
                onFocus={onFocus}
                autofocus={autofocus}
            />
            <div className={`${styles.buttons} ${editingStyles}`}>
                <button className={styles.save} onClick={onSave}>
                    Save
                </button>
                <button className={styles.cancel} onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </div>
    )
}

interface EditBoxProps {
    defaultMessage: string
    autofocus?: boolean
    save: (commentText: string) => void
    cancel: () => void
}
