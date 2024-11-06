import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Player {
  name: string;
  role: string;
  joinedYear: string;
  schoolId: string;
  achievements: string[];
}

interface SportTeamProps {
  sportName: string;
  coach: string;
  players: Player[];
}

const SportTeam = ({ sportName, coach, players }: SportTeamProps) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-mksu-blue">
            {sportName} Team
          </CardTitle>
          <p className="text-lg text-gray-600">Coach: {coach}</p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Joined Year</TableHead>
                <TableHead>School ID</TableHead>
                <TableHead>Achievements</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {players.map((player, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{player.name}</TableCell>
                  <TableCell>{player.role}</TableCell>
                  <TableCell>{player.joinedYear}</TableCell>
                  <TableCell>{player.schoolId}</TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside">
                      {player.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default SportTeam;
