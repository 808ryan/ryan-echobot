import * as Discord from 'discord.js-self';
export type ConfigOptions = {
    webhook?: boolean
    webhookUsername?: string
    webhookAvatarURL?: string

    embed?: {
        title?: string
        color?: Discord.ColorResolvable
        timestamp?: boolean
        author?: boolean
        fields?: {
            author?: boolean
            server?: boolean
            channel?: boolean
        }
    },

    includeAuthorTag?: boolean
    includeAuthorAsEmbed?: boolean
    includeAuthor?: boolean
    includeChannel?: boolean

    allowMentions?: boolean
    allowEdit?: boolean
    allowDelete?: boolean

    copyEmbed?: boolean
    copyAttachments?: boolean
    minLength?: number

    allowList?: []
    denyList?: []
};

export type ConfigRedirect = {
    sources?: string[]
    destinations?: string[]
    options?: ConfigOptions
};

export type Config = {
    token: string,
    redirects: ConfigRedirect[];
};

export type SendableChannel = Discord.NewsChannel | Discord.TextChannel;