function MyButton(test) {
    const handleClick = () => {
      console.log("hello world!");
    }

    return (
      <button onClick={handleClick}>
        {test.message}
      </button>
    );
  }

export default MyButton;