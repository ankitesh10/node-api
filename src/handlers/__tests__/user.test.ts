import * as user from '../user';
describe('user handler', () => {
  it('user handler', async () => {
    const req = { body: { username: 'hello', password: 'hi' } };
    const res = {
      json({ token }) {
        expect(token).toBeTruthy();
      },
    };

    await user.createUser(req, res, () => {});
  });
});
