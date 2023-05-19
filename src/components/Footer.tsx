import { ChatMessageInput } from "./ChatMessageInput";

type Props = {
    disabled: boolean;
    onSendMessage: (message: string) => void;
}

export const Footer = ({onSendMessage, disabled }: Props) => {
    return (
        <footer className="w-full border-t border-t-gray-600 p-2">
            <div className="max-w-4xl m-auto">
                <ChatMessageInput
                    disabled={disabled}
                    onSend={onSendMessage}
                />
                <div className="pt-3 text-center text-xs text-gray-300">
                    Feito pela CodingJv. Permitida a cópia e uso para qualquer fim.<br/>
                    <a href="https://portfoliodejoao.netlify.app/" className="underline">
                        Quer ter acesso a mais projetos como esse? Clique aqui</a>
                </div>
            </div>
        </footer>
    );
}
