import { Share2, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ElpxLogo from "@/assets/ElpxLoogo.svg";

const CampaignPreview = () => {
  const campaign = {
    title: "Help John Achieve His Jazz Dream",
    description: "Supporting a talented musician's journey to record his first professional album and share his passion for jazz with the world.",
    raised: 5420,
    goal: 8000,
    donors: 45,
    daysLeft: 12,
    organizer: "John Smith",
    location: "New York, NY",
    story: `My name is John Smith, and I've been passionate about jazz music for over 15 years. After years of performing in local venues and honing my craft, I'm ready to take the next step in my musical journey.

I'm raising funds to record my first professional album, "Midnight Sessions," which will feature original compositions that blend traditional jazz with contemporary influences. The funds will go towards studio time, professional musicians, mixing, mastering, and production costs.

This album represents not just my personal dream, but a contribution to the rich tradition of jazz music. Your support will help bring these musical stories to life and share them with jazz lovers around the world.

Every contribution, no matter the size, brings me closer to making this dream a reality. Thank you for believing in my music and helping to keep jazz alive for future generations.`,
    updates: [
      {
        id: 1,
        date: "2 days ago",
        title: "Studio sessions begin next week!",
        content: "Thanks to your amazing support, we've secured studio time and are ready to start recording. I can't wait to share the first tracks with you!"
      }
    ],
    comments: [
      {
        id: 1,
        author: "Sarah M.",
        content: "Can't wait to hear your album, John! Jazz needs more artists like you.",
        amount: 50,
        date: "3 hours ago"
      },
      {
        id: 2,
        author: "Mike R.",
        content: "Proud to support local talent. Keep following your dreams!",
        amount: 25,
        date: "1 day ago"
      }
    ]
  };

  const progressPercentage = (campaign.raised / campaign.goal) * 100;

  return (
    <DashboardLayout>
      <div className="w-full mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Campaign Preview</h1>
            <p className="text-gray-600">Create or Publish Campaigns</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button className="bg-primary hover:bg-primary-hover">
              Publish Campaign
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Campaign Image */}
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src={ElpxLogo}
                alt={campaign.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Campaign Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{campaign.title}</h1>
              <p className="text-gray-600 mb-4">{campaign.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>By {campaign.organizer}</span>
                <span>•</span>
                <span>{campaign.location}</span>
              </div>
            </div>

            {/* Story */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Story</h2>
                <div className="prose prose-gray max-w-none">
                  {campaign.story.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Updates */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Updates</h2>
                <div className="space-y-4">
                  {campaign.updates.map((update) => (
                    <div key={update.id} className="border-l-4 border-primary pl-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-gray-900">{update.title}</h3>
                        <span className="text-sm text-gray-500">{update.date}</span>
                      </div>
                      <p className="text-gray-700">{update.content}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Comments */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Comments ({campaign.comments.length})</h2>
                <div className="space-y-4">
                  {campaign.comments.map((comment) => (
                    <div key={comment.id} className="flex gap-3">
                      <Avatar>
                        <AvatarFallback>{comment.author[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-gray-900">{comment.author}</span>
                          <span className="text-sm text-gray-500">donated ${comment.amount}</span>
                          <span className="text-sm text-gray-400">•</span>
                          <span className="text-sm text-gray-400">{comment.date}</span>
                        </div>
                        <p className="text-gray-700">{comment.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Donation Card */}
            <Card className="sticky top-6">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    ${campaign.raised.toLocaleString()}
                  </div>
                  <div className="text-gray-600 mb-4">
                    raised of ${campaign.goal.toLocaleString()} goal
                  </div>
                  <Progress value={progressPercentage} className="h-3 mb-4" />
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="font-semibold text-gray-900">{campaign.donors}</div>
                      <div className="text-sm text-gray-600">donors</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{campaign.daysLeft}</div>
                      <div className="text-sm text-gray-600">days left</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-primary hover:bg-primary-hover" size="lg">
                    Donate Now
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Heart className="h-4 w-4 mr-2" />
                    Follow
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Organizer Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Organizer</h3>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-gray-900">{campaign.organizer}</div>
                    <div className="text-sm text-gray-600">Organizer</div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CampaignPreview;