import { describe, it, expect, vi } from 'vitest'
import { userMock1 } from 'domain/user'
import { toPlainObject } from 'domain/utils'
import { createComment } from './comment'

vi.mock('uuid', () => ({
    v4: () => 'mock-uuid',
}))

describe('Comment entity module', () => {
    it('Change comment message', () => {
        const message = 'Test new comment message'
        const reference = createComment({
            user: userMock1,
            message: 'Original message',
        })
        const expected = createComment({
            user: userMock1,
            message,
        })
        reference.setMessage(message)

        expect(toPlainObject(reference)).toEqual(toPlainObject(expected))
    })
})
