export default function catchAsync(fn) {
  return function (req, res, next) {
    try {
      fn(req, res, next);
    } catch (e) {
      next(e);
    }
  };
}
