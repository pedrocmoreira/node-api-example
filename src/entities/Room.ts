import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from "typeorm";
import { Subject } from "./Subject";
import { Video } from "./Video";

@Entity("rooms")
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @OneToMany(() => Video, (video) => video.room) //Um para muitos
  videos: Video[];

  @ManyToMany(() => Subject, (subject) => subject.rooms) //muitos para muitos
  subjects: Subject[];
}
