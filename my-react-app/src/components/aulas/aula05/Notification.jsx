
//O Notification usa short-circuit (&&): a notificação só aparece quando showNotification é true. No App, dois estados independentes controlam o login e a notificação

const Notification = ({ showNotification }) => {
  return (
    <div>
      {showNotification && <p>Você tem novas mensagens!</p>}
    </div>
  );
};

export default Notification;
          