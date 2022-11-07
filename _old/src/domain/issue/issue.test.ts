import { describe, it, expect, vi } from 'vitest';
import { userMock1, userMock2 } from 'domain/user';
import { Comment } from 'domain/comment';
import { Issue } from './issue';

vi.mock('uuid', () => ({
  v4: () => 'mock-uuid',
}));

const commentMock = new Comment({
  user: userMock2,
  message: 'This should be implemented ASAP',
});

describe('Issue entity module', () => {
  const createdAt = new Date();

  it('Change issue name', () => {
    const name = 'Issue name test';
    const reference = new Issue({
      name: 'Refactor entities id to UUID',
      description: 'Should be better to use UUID so ID duplication is less likely',
      categoryId: 'TODO',
      reporter: userMock1,
      asignee: userMock2,
      comments: [],
      priority: 'high',
      createdAt,
    });
    const expected = new Issue({
      name,
      description: 'Should be better to use UUID so ID duplication is less likely',
      categoryId: 'TODO',
      reporter: userMock1,
      asignee: userMock2,
      comments: [],
      priority: 'high',
      createdAt,
    });
    reference.setName(name);

    expect(reference).toEqual(expected);
  });

  it('Change issue description', () => {
    const description = 'Issue description test';
    const reference = new Issue({
      name: 'Refactor entities id to UUID',
      description: 'Should be better to use UUID so ID duplication is less likely',
      categoryId: 'TODO',
      reporter: userMock1,
      asignee: userMock2,
      comments: [],
      priority: 'high',
      createdAt,
    });
    const expected = new Issue({
      name: 'Refactor entities id to UUID',
      description,
      categoryId: 'TODO',
      reporter: userMock1,
      asignee: userMock2,
      comments: [],
      priority: 'high',
      createdAt,
    });
    reference.setDescription(description);

    expect(reference).toEqual(expected);
  });

  it('Set issue asignee', () => {
    const asignee = userMock2;
    const reference = new Issue({
      name: 'Refactor entities id to UUID',
      description: 'Should be better to use UUID so ID duplication is less likely',
      categoryId: 'TODO',
      reporter: userMock1,
      asignee: userMock1,
      comments: [],
      priority: 'high',
      createdAt,
    });
    const expected = new Issue({
      name: 'Refactor entities id to UUID',
      description: 'Should be better to use UUID so ID duplication is less likely',
      categoryId: 'TODO',
      reporter: userMock1,
      asignee: userMock2,
      comments: [],
      priority: 'high',
      createdAt,
    });
    reference.setAsignee(asignee);

    expect(reference).toEqual(expected);
  });

  it('Add comment to issue', () => {
    const reference = new Issue({
      name: 'Refactor entities id to UUID',
      description: 'Should be better to use UUID so ID duplication is less likely',
      categoryId: 'TODO',
      reporter: userMock1,
      asignee: userMock2,
      comments: [],
      priority: 'high',
      createdAt,
    });
    const expected = new Issue({
      name: 'Refactor entities id to UUID',
      description: 'Should be better to use UUID so ID duplication is less likely',
      categoryId: 'TODO',
      reporter: userMock1,
      asignee: userMock2,
      comments: [commentMock],
      priority: 'high',
      createdAt,
    });
    reference.addComment(commentMock);
    expect(reference).toEqual(expected);
  });

  it('Remove comment from issue', () => {
    const reference = new Issue({
      name: 'Refactor entities id to UUID',
      description: 'Should be better to use UUID so ID duplication is less likely',
      categoryId: 'TODO',
      reporter: userMock1,
      asignee: userMock2,
      comments: [commentMock],
      priority: 'high',
      createdAt,
    });
    const expected = new Issue({
      name: 'Refactor entities id to UUID',
      description: 'Should be better to use UUID so ID duplication is less likely',
      categoryId: 'TODO',
      reporter: userMock1,
      asignee: userMock2,
      comments: [],
      priority: 'high',
      createdAt,
    });
    const removedComment = reference.removeComment(commentMock.id);
    expect(reference).toEqual(expected);

    if (removedComment) {
      expect(removedComment).toEqual(commentMock);
    }
  });
});
