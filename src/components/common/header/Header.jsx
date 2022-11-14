import { MdGames } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { unsetUser } from "../../../store/actions/authActions";
import { GoogleLogin } from "../../auth";
import { Button } from "../ui";
import { RiUser5Fill } from "react-icons/ri";

export const Header = () => {
  const dispatch = useDispatch();
  const { authenticated } = useSelector(({ auth }) => {
    const { authenticated } = auth;

    return { authenticated };
  });

  return (
    <div className="container mx-auto px-4 flex justify-between">
      <h1 className="font-bold uppercase text-lg inline-block">
        <Link to="/" title="Home" className="flex gap-3">
          <MdGames size={32} className="inline-block"></MdGames>
          Game Shell
        </Link>
      </h1>

      <div>
        {authenticated ? (
          <div className="flex gap-2">
            <Link to="/profile" title="Profile">
              <Button element="span">
                <RiUser5Fill className="inline-block" />
              </Button>
            </Link>

            <Button
              type="button"
              onClick={() => {
                dispatch(unsetUser());
              }}
              skin="primaryInverted"
              title="Log Out"
            >
              Log Out
            </Button>
          </div>
        ) : (
          <GoogleLogin></GoogleLogin>
        )}
      </div>
    </div>
  );
};
