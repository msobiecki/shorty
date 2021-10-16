import { throwNotification } from './throwNotification';

describe('Throw Notification Action', () => {
  test('throw notification', () => {
    const result = throwNotification({});

    expect(result.type).toBe('THROW_NOTIFICATION');
  });

  test('throw notification as defualt', () => {
    const result = throwNotification({});

    expect(result.payload.status).toBe('default');
  });

  test('throw notification as success', () => {
    const result = throwNotification({ status: 'success' });

    expect(result.payload.status).toBe('success');
  });

  test('throw notification as warning', () => {
    const result = throwNotification({ status: 'warning' });

    expect(result.payload.status).toBe('warning');
  });

  test('throw notification as error', () => {
    const result = throwNotification({ status: 'error' });

    expect(result.payload.status).toBe('error');
  });

  test('throw notification define message', () => {
    const result = throwNotification({ message: 'TEST_MESSAGE' });

    expect(result.payload.message).toBe('TEST_MESSAGE');
  });
});
