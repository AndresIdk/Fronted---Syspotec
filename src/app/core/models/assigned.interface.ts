import { StatusInterface } from "./status.interface";
import { TicketInterface } from "./ticket.interface";
import { UserInterface } from "./user.interface";

export interface AssignedInterface {
    id: number;
    ticket: TicketInterface;
    user: UserInterface;
    status: StatusInterface;
    date: Date;
}