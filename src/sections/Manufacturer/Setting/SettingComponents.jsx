import { PrimaryButton } from "@/components/Buttons";
import { Input } from "@/components/Form";
import { updatePassword, updateUser, useCurrentUser } from "@/lib/app/user";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function SettingComponents() {
  const { user: data } = useCurrentUser();
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });
  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(user._id, {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        address: user.address,
        city: user.city,
        state: user.state,
        country: user.country,
      });
      toast.success("User updated successfully");
    } catch (error) {
      toast.error(error?.message.toString());
    }
  };
  const onSubmitPassword = async (e) => {
    e.preventDefault();
    try {
      await updatePassword({
        currentPassword: password.current,
        newPassword: password.new,
        confirmPassword: password.confirm,
      });
      toast.success("Password updated successfully");
    } catch (error) {
      toast.error(error?.message.toString());
    } finally {
      setPassword({
        current: "",
        new: "",
        confirm: "",
      });
    }
  };
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4">
          <div className="mb-4 col-span-full xl:mb-2">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl ">
              User settings
            </h1>
          </div>

          <div className="col-span-2">
            <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 sm:p-6">
              <h3 className="mb-4 text-xl font-semibold ">
                General information
              </h3>
              <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Input
                    placeholder="Bonnie"
                    className="w-full"
                    value={user?.firstName}
                    onChange={(e) =>
                      setUser({ ...user, firstName: e.target.value })
                    }
                  >
                    First Name
                  </Input>
                  <Input
                    placeholder="Heniv"
                    className="w-full"
                    value={user?.lastName}
                    onChange={(e) =>
                      setUser({ ...user, lastName: e.target.value })
                    }
                  >
                    Last Name
                  </Input>
                  <Input
                    type="email"
                    placeholder="bonnei@email.com"
                    className="w-full"
                    value={user?.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  >
                    Email
                  </Input>
                  <Input
                    type="tel"
                    placeholder="1234567890"
                    className="w-full"
                    value={user?.phone}
                    onChange={(e) =>
                      setUser({ ...user, phone: e.target.value })
                    }
                  >
                    Phone
                  </Input>
                  <Input
                    placeholder="California"
                    className="w-full"
                    value={user?.address}
                    onChange={(e) =>
                      setUser({ ...user, address: e.target.value })
                    }
                  >
                    Address
                  </Input>
                  <Input
                    placeholder="San Francisco"
                    className="w-full"
                    value={user?.city}
                    onChange={(e) => setUser({ ...user, city: e.target.value })}
                  >
                    City
                  </Input>
                  <Input
                    placeholder="California"
                    className="w-full"
                    value={user?.state}
                    onChange={(e) =>
                      setUser({ ...user, state: e.target.value })
                    }
                  >
                    State
                  </Input>
                  <Input
                    placeholder="United States"
                    className="w-full"
                    value={user?.country}
                    onChange={(e) =>
                      setUser({ ...user, country: e.target.value })
                    }
                  >
                    Country
                  </Input>
                  <PrimaryButton className="mx-auto col-span-2">
                    Save
                  </PrimaryButton>
                </div>
              </form>
            </div>
          </div>
          <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 h-min">
            <h3 className="mb-4 text-xl font-semibold ">
              Password information
            </h3>
            <form onSubmit={onSubmitPassword}>
              <div className="grid grid-cols-1 gap-6">
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="w-full"
                  value={password.current}
                  onChange={(e) =>
                    setPassword({ ...password, current: e.target.value })
                  }
                >
                  Current password
                </Input>
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="w-full"
                  value={password.new}
                  onChange={(e) =>
                    setPassword({ ...password, new: e.target.value })
                  }
                >
                  New password
                </Input>
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="w-full"
                  value={password.confirm}
                  onChange={(e) =>
                    setPassword({ ...password, confirm: e.target.value })
                  }
                >
                  Confirm password
                </Input>

                <PrimaryButton className="mx-auto">Save</PrimaryButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingComponents;
