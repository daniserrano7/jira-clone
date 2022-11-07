import { useState } from 'react'
import { Comment } from 'domain/comment'
import { addCommentDb } from 'infrastructure/db/comment'
import { appStore, projectStore } from 'infrastructure/store'
import { UserAvatar } from 'ui/components/avatar'
import { EditBox } from '../edit-box'
import styles from './create-comment.module.scss'

export const CreateComment = (): JSX.Element => {
    const [isEditing, setIsEditing] = useState<boolean>(false)

    const save = (message: string) => {
        const issue = projectStore.editingIssue

        if (!issue) {
            throw new Error('No issue to edit')
        }

        const comment = new Comment({
            user: appStore.user,
            message,
        })
        issue.addComment(comment)
        addCommentDb(comment, issue.id)
        setIsEditing(false)
    }
    const cancel = () => setIsEditing(false)

    const editStyles = isEditing ? styles.editing : undefined

    return (
        <div className={`${styles.container} ${editStyles}`}>
            <UserAvatar {...appStore.user} tooltip={false} />
            <EditBox defaultMessage="" save={save} cancel={cancel} />
        </div>
    )
}
