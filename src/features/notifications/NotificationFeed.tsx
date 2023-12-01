'use client'
import { useEffect } from "react";
import useNotifications from "@/libs/hooks/useNotification";
import useCurrentUser from "@/libs/hooks/useCurrentUser";

const NotificationFeed = () => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { data: fetchedNotifications = [] } = useNotifications(currentUser?.id);

  useEffect(() => {
    mutateCurrentUser();
  }, [mutateCurrentUser]);

  if (fetchedNotifications.length === 0) {
      return (
          <div className="bg-gray-100 p-4 flex justify-center items-center m-8">
            <p className="text-gray-500">You don&apos;t have any notifications</p>
          </div>
    )
  }
    
  return ( 
    <div className="flex flex-col">
      {fetchedNotifications.map((notification: Record<string, any>) => (
        <div key={notification.id} className="flex flex-row items-center p-6 gap-4 bg-gray-100">
          <p className="text-gray-500">
            {notification.body}
          </p>
        </div>
        ))}
    </div>
   );
}
 
export default NotificationFeed;