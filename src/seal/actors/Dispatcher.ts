import Envelope from "./Envelope";
import ActorCell from "./ActorCell";

export default interface Dispatcher {
    dispatch(cell: ActorCell, envelope: Envelope)
}