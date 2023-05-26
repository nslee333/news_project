
export const initialHeaderState = {
  displaySettings: false,
}

const action_feed = {
  type: "switch_from_feed"
}
const action_sett = {
  type: "switch_from_settings"
}


export default function Header(props) {

  return (
    <>
      <div className="header-inner">
        <a onClick={() => props.dispatch(action_feed)}>
          <div className="header-title">News Feed</div>
        </a>
        <a onClick={() => props.dispatch(action_sett)}>
          {/* <div className="header-settings">Settings</div> */}
        </a>
      </div>
    </>
  );
}