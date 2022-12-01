const Node = (value) => {
  let data = value;
  let next = null;

  return {
    get data() { return data },
    set data(input) { data = input },
    get next() { return next },
    set next(node) { next = node }
  };
};

export default Node;