import { describe, it, expect, vi } from 'vitest'
import { userMock1 } from 'domain/user'
import { Comment } from './comment'

vi.mock('uuid', () => ({
    v4: () => 'mock-uuid',
}))

describe('Comment entity module', () => {
    it('Change comment message', () => {
        const message = 'Test new comment message'
        const reference = new Comment({
            user: userMock1,
            message: 'Original message',
        })
        const expected = new Comment({
            user: userMock1,
            message,
        })
        reference.setMessage(message)

        expect(reference).toEqual(expected)
    })
})
