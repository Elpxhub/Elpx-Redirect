import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Plus,
  Eye,
  Edit,
  MoreHorizontal,
  HandHelping,
  Megaphone,
  Users,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Logo from "@/assets/greenlogo.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DashboardLayout from "@/components/layout/DashboardLayout";

const Campaigns = () => {
  const stats = {
    campaigns: 1,
    active: 1,
    ended: 0,
    views: 12,
    opened: 2,
    closed: 2,
    raised: 12,
    raisedFor: 2,
  };

  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      title: "Help John Doe Achieve His Japa Dream",
      image: Logo,
      raised: 2500,
      goal: 5000,
      donors: 45,
      daysLeft: 12,
      category: "Education",
      supporters: 3000,
      status: "active",
    },
    {
      id: 2,
      title: "Education for Kids",
      image: Logo,
      raised: 6000,
      goal: 6000,
      donors: 120,
      daysLeft: 0,
      category: "Business",
      supporters: 1500,
      status: "ended",
    },
    {
      id: 3,
      title: "Wildlife Conservation",
      image: Logo,
      raised: 10000,
      goal: 15000,
      donors: 230,
      supporters: 4000,
      daysLeft: -5,
      category: "Financial",
      status: "closed",
    },
  ]);

  const renderCampaigns = (status: string) => (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {campaigns
        .filter((c) => c.status === status)
        .map((campaign) => (
          <Card key={campaign.id} className="overflow-hidden">
            <div className="aspect-video bg-gray-200 relative">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-white/80 hover:bg-white"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <CardContent className="p-4">
              <p className="text-[12px] font-bold text-[#b78103] bg-[rgba(255,193,7,0.16)] rounded-[6px] px-2 py-1 inline-block">
                {campaign?.category}
              </p>

              <h3 className="font-semibold text-gray-900 mt-1 mb-2 line-clamp-2">
                {campaign.title}
              </h3>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">
                      <strong className="text-[18px]">
                        ${campaign.raised.toLocaleString()}
                      </strong>{" "}
                      raised out of ${campaign.goal.toLocaleString()} goal
                    </span>
                    <span className="text-sm text-gray-600">
                      {Math.round((campaign.raised / campaign.goal) * 100)}%
                    </span>
                  </div>
                  <Progress
                    value={(campaign.raised / campaign.goal) * 100}
                    className="h-2"
                  />
                  <div className="flex justify-between items-center mt-1">
                    <span className="flex items-center text-xs text-gray-500">
                      <HandHelping className="w-4 h-4 mr-1 text-yellow-600" />
                      {campaign.supporters.toLocaleString()} Supporters
                    </span>
                  </div>
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                  <span>{campaign.donors} donors</span>
                  <span>
                    {campaign.daysLeft > 0
                      ? `${campaign.daysLeft} days left`
                      : "Completed"}
                  </span>
                </div>

                <Button
                  className="w-full bg-primary hover:bg-primary-hover"
                  size="sm"
                >
                  View Campaign
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
    </div>
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Campaigns</h1>
            <p className="text-gray-600">
              View and manage all your campaigns.
            </p>
          </div>
          <Link to="/create-campaign">
            <Button className="bg-primary hover:bg-primary-hover">
              <Plus className="h-4 w-4 mr-2" />
              Create Campaign
            </Button>
          </Link>
        </div>

        <div>
          <div className="p-4 bg-white rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Number of Campaigns */}
              <div className="bg-green-50 border border-green-500 rounded-lg p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">Number of Campaigns</p>
                    <h2 className="text-3xl font-bold text-gray-800 mt-1">
                      {stats.campaigns}
                    </h2>
                  </div>
                  <Megaphone className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-4 border-t pt-2">
                  <span>Active: {stats.active}</span>
                  <span>Ended: {stats.ended}</span>
                </div>
              </div>

              {/* Campaign Views */}
              <div className="bg-white border rounded-lg p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">Campaign Views</p>
                    <h2 className="text-3xl font-bold text-gray-800 mt-1">
                      {stats.views}
                    </h2>
                  </div>
                  <div className="bg-gray-100 rounded-full p-2">
                    <Users className="w-5 h-5 text-black" />
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-4 border-t pt-2">
                  <span>Opened: {stats.opened}</span>
                  <span>Closed: {stats.closed}</span>
                </div>
              </div>

              {/* Total Raised */}
              <div className="bg-white border rounded-lg p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">Total Raised</p>
                    <h2 className="text-3xl font-bold text-gray-800 mt-1">
                      {stats.raised}
                    </h2>
                  </div>
                  <div className="bg-gray-100 rounded-full p-2">
                    <UserCheck className="w-5 h-5 text-black" />
                  </div>
                </div>
                <div className="text-sm text-gray-600 mt-4 border-t pt-2">
                  Campaigns Raised For: {stats.raisedFor}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl">
          <Tabs defaultValue="active" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="ended">Ended</TabsTrigger>
              <TabsTrigger value="closed">Closed</TabsTrigger>
            </TabsList>

            <TabsContent value="active">
              {renderCampaigns("active")}
            </TabsContent>
            <TabsContent value="ended">{renderCampaigns("ended")}</TabsContent>
            <TabsContent value="closed">
              {renderCampaigns("closed")}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Campaigns;
