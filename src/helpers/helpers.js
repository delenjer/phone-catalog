export const addLikePhone = (id, likePhoneId, setLikePhoneId) => {
  const hasLike = likePhoneId.findIndex(item => item === id);

  if (hasLike === -1) {
    setLikePhoneId([...likePhoneId, id]);
  } else {
    setLikePhoneId([...likePhoneId.filter(item => item !== id)]);
  }
};

export function getWindowSize() {
  const { innerWidth: width } = window;

  return {
    width,
  };
}
