import axios from 'axios';

export const sendTotal = (total: number) => {
  axios
    .post(
      'superchat-challenge-numbers.free.beeceptor.com/sum',
      {
        sum: total,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    .catch((err) => {
      throw new Error(err.message);
    });
};
