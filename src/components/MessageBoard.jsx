import { useSelector, useDispatch } from "react-redux";
import {
  newMessage,
  messageList,
  deleteMessage,
} from "../slices/messageBoardSlice";
function MessageBoard() {
  const postMessage = useSelector((state) => {
    return state.message.list;
  });
  const dispatch = useDispatch();
  console.log(postMessage);
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
            onChange={(e) => {
              dispatch(newMessage(e.target.value));
            }}
          />
        </label>
        <button
          className="submit-message-button"
          onClick={() => {
            dispatch(messageList());
          }}
        >
          Submit
        </button>
      </div>
      <div className="board">
        {postMessage.map((message, index) => {
          return (
            <div className="message" key={index}>
              <h1>{message}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  dispatch(deleteMessage(index));
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
