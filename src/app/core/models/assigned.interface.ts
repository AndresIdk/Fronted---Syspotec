import { StatusInterface } from "./status.interface";
import { TicketInterface } from "./ticket.interface";
import { UserDTOInterface } from "./userDTO.interface";

export interface AssignedInterface {
    id: number;
    ticket: TicketInterface;
    user: UserDTOInterface;
    status: StatusInterface;
    date: Date;
}