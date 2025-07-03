import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { UserPlusIcon } from "lucide-react";

const RecommendedUsers = () => {
  const [recommendedUsers, setRecommendedUsers] = useState([]);
  const [sentRequests, setSentRequests] = useState(new Set());

  const fetchRecommended = async () => {
    try {
      const res = await axiosInstance.get("/users");
      setRecommendedUsers(res.data);
    } catch (error) {
      console.error("Error fetching recommended users", error);
      toast.error("Failed to load recommended users");
    }
  };

  const sendFriendRequest = async (userId) => {
    try {
      await axiosInstance.post(`/api/users/friend-request/${userId}`);
      toast.success("Friend request sent!");
      setSentRequests((prev) => new Set(prev).add(userId));
    } catch (error) {
      console.error("Error sending friend request", error);
      const msg = error?.response?.data?.message || "Something went wrong";
      toast.error(msg);
    }
  };

  useEffect(() => {
    fetchRecommended();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {recommendedUsers.length === 0 ? (
        <p className="text-center w-full">No recommendations found.</p>
      ) : (
        recommendedUsers.map((user) => (
          <div key={user._id} className="card bg-base-200 shadow-md">
            <div className="card-body flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="avatar size-12">
                <img
  src={user.profilePic || "https://i.ibb.co/XYZ123/default-avatar.png"}
  alt={user.fullName}
  className="rounded-full"
/>

                </div>
                <div>
                  <h3 className="font-semibold">{user.fullName}</h3>
                  <p className="text-sm opacity-70">{user.language?.toUpperCase()}</p>
                </div>
              </div>

              <button
                className="btn btn-outline btn-sm"
                disabled={sentRequests.has(user._id)}
                onClick={() => sendFriendRequest(user._id)}
              >
                <UserPlusIcon className="size-4 mr-1" />
                {sentRequests.has(user._id) ? "Request Sent" : "Add Friend"}
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendedUsers;
