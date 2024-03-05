import { db, getRegister } from "@/database";
import { Component } from "@/discord/base";
import { settings } from "@/settings";
import { brBuilder, createModalInput, createRow, hexToRgb, toNull } from "@magicyan/discord";
import { ButtonBuilder, ButtonInteraction, ButtonStyle, ChannelType, EmbedBuilder, TextInputStyle, User, codeBlock, Integration, time, ComponentType } from "discord.js";
import { firestore } from "firebase-admin";

new Component({
    customId: "staff-form-start-button",
    type: ComponentType.Button,
    cache: "cached",
    async run(interaction) {
        const { guild, user } = interaction;


        const userData = await getRegister(user);
        if (userData.requests?.staff){
            interaction.reply({ ephemeral,
                content: `Você já tem um envio pendente!`,
            });
            return;
        }
    },
});