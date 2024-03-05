import { ApplicationCommandType } from "discord.js";
import { Command } from "../base";
import { db } from "@/database";


new Command( {
    name: "set",
    description: "set command",
    dmPermission,
    type: ApplicationCommandType.ChatInput,
    async run(interaction){
        const { member } = interaction;

       // db.upset(db.users, member.id, {
       //  username: member.user.username,
       //  displayName: member.displayName,
       //   wallet: {
       //      coins: 20,
       //     credits: 30,
       //       }
       //    });

       const memberData = await db.get(db.users, member.id);

       interaction.reply({ephemeral, content: `Coins de ${member}: ${memberData?.wallet?.coins || 0} coins`});
       
    }  
});