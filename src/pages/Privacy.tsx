import styles from '../styles/Privacy.module.scss';

export default function Privacy() {
    return (
        <div className={styles.privacy}>
            <p><b>Privacy Statement for Cookiebot</b></p><br/>

            <p>Cookiebot is a Telegram bot designed to manage and enhance group interactions. This privacy statement outlines the types of information Cookiebot collects, how it is stored, and the purposes for which it is used.</p><br/>
            <p><i>By using Cookiebot, you agree to the terms of this privacy statement.</i></p>

            <br/>
            
            <p><b>Information Collection and Use</b></p><br/>

            <p>1. <b>Group and User Identification</b></p><br/>
            <p>• Cookiebot stores the IDs of groups it is a member of to facilitate its functionalities within these groups.</p><br/>
            <p>• The bot stores usernames of users within groups as they send messages, enabling it to tag users within these chats.</p><br/>

            <p>2. <b>Media and Stickers</b></p><br/>
            <p>• Sticker IDs and media IDs can be stored by the bot, but this data is never processed beyond storage.</p><br/>

            <p>3. <b>Configuration and Rules</b></p><br/>
            <p>• Welcome messages, rules messages, and configurations are only stored when a user explicitly sends them to the bot for setup purposes.</p><br/>

            <p>4. <b>Fake Account Reporting</b></p><br/>
            <p>• The bot stores the IDs of users reported as fake accounts by others to protect groups from spam and malicious accounts.</p><br/>

            <p><b>Data Storage and Security</b></p><br/>

            <p>• All stored data is kept in a secure database accessible only via encrypted SSH connections.</p><br/>
            <p>• Message contexts are temporarily stored in RAM and are not saved to the database. This data is volatile and quickly exchanged, ensuring it is not retained for long-term use.</p><br/>
            <p>• Cookiebot does not store any message content, personal information, profile photos, or perform any form of authentication.</p><br/>
            <p>• Error messages are sent directly to the bot creator for debugging purposes but are not stored.</p><br/>

            <p><b>User Interactions</b></p><br/>

            <p>• Messages sent privately to the bot are never stored.</p><br/>
            <p>• In group chats, only the username and group ID are stored from group messages. For sticker messages, the sticker ID is stored; otherwise, no other data is stored.</p><br/>
            <p>• When interacting directly with the bot to change rules, welcome messages, or configurations, the context of these messages is volatile and not stored in the database.</p><br/>
            <p>• Messages that do not involve the bot will not result in any data storage other than what is specified above.</p><br/>

            <p><b>Open Source Code</b></p><br/>
            <p>Cookiebot's code is open source and available in the following repositories:</p><br/>

            <a href="https://github.com/MekhyW/COOKIEBOT-Telegram-Group-Bot">Cookiebot Telegram Group Bot</a><br/>
            <a href="https://github.com/MekhyW/COOKIEBOT-backend">Cookiebot Backend</a><br/>
            <a href="https://github.com/MekhyW/COOKIEBOT-WebHub">Cookiebot WebHub</a><br/>
            <br/>
            <p><b>Contact</b></p><br/>
            <p>If you have any questions or concerns about this privacy statement, please contact me, @mekhyw.</p><br/>

            <blockquote>Thank you for using Cookiebot. Your privacy is important to me, and I am committed to protecting your data while helping your group chat experience.</blockquote>
        </div>
    )
}