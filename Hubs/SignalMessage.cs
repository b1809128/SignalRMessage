using Microsoft.AspNetCore.SignalR;


namespace SignalRChat.Hubs
{
    public class SignalMessage : Hub
    {
        public string Code { get; set; }
        // public string Name { get; set; }

        public object Data { get; set; }

        public SignalMessage()
        {
            Code = "";
            Data = new object();
        }

        public async Task SendMessage(string code, object data)
        {
            await Clients.All.SendAsync("ReceiveMessage", new SignalMessage() { Code = code, Data = data });
        }
    }
}
