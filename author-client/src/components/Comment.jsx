const Comment = () => {
  return (
    <>
      <form className="content-form" action="post">
        <label htmlFor="comment">Comment</label>
        <input id="comment" />
      </form>
    </>
  );
};

export default Comment;
