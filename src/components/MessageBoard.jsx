import { useSelector, useDispatch } from "react-redux";
import { inputMessage, addMessage, deleteMessage } from "../slices/messageBoardSlice";

function MessageBoard() {
  const messageList = useSelector((state) => {
    return state.message.list;
  });

  const dispatch = useDispatch();

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(event) => {
              dispatch(inputMessage(event.target.value));
            }}
          />
        </label>
        <button
          className="submit-message-button"
          onClick={() => {
            dispatch(addMessage());
          }}
        >
          Submit
        </button>
      </div>
      {messageList.map((message, index) => {
        return (
          <div className="board" key={index}>
            <div className="message">
              <h1>{message.text}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  dispatch(deleteMessage(index));
                }}
              >
                x
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MessageBoard;
