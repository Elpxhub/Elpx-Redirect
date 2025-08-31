import { motion } from "framer-motion";
import { Heart, TrendingUp, Users, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/layout/DashboardLayout";

const Donations = () => {
  const donations = [
    {
      id: 1,
      donor: "Anonymous",
      amount: 250,
      campaign: "Help Build School",
      date: "2024-01-15",
      status: "completed"
    },
    {
      id: 2,
      donor: "John Smith",
      amount: 100,
      campaign: "Medical Emergency Fund",
      date: "2024-01-14",
      status: "completed"
    },
    {
      id: 3,
      donor: "Sarah Johnson",
      amount: 500,
      campaign: "Community Garden",
      date: "2024-01-13",
      status: "pending"
    }
  ];

  const stats = [
    {
      title: "Total Donations",
      value: "$12,450",
      icon: DollarSign,
      change: "+12%",
      positive: true
    },
    {
      title: "Total Donors",
      value: "348",
      icon: Users,
      change: "+8%",
      positive: true
    },
    {
      title: "Average Donation",
      value: "$85",
      icon: TrendingUp,
      change: "+15%",
      positive: true
    },
    {
      title: "Success Rate",
      value: "94%",
      icon: Heart,
      change: "+2%",
      positive: true
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900">Donations</h1>
          <p className="text-gray-600 mt-2">Track and manage all donations to your campaigns</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <p className={`text-xs ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Donations Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Recent Donations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {donations.map((donation) => (
                  <div
                    key={donation.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{donation.donor}</p>
                        <p className="text-sm text-gray-600">{donation.campaign}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">${donation.amount}</p>
                      <p className="text-sm text-gray-600">{donation.date}</p>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      donation.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {donation.status}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline">Load More</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Donations;