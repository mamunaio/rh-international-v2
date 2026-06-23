"use client";

import { useQuery } from "@tanstack/react-query";
import { Package, ShoppingCart, Ticket, Users, DollarSign } from "lucide-react";

const StatCard = ({ label, value, icon: Icon, color }: { label: string; value: string | number; icon: any; color: string }) => (
  <div className="rounded-2xl border border-border/20 bg-card/50 p-6">
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm text-muted-foreground font-medium">{label}</span>
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
        <Icon className="w-5 h-5" />
      </div>
    </div>
    <p className="text-3xl font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {value}
    </p>
  </div>
);

const AdminOverview = () => {
  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const [productsRes, ordersRes] = await Promise.all([
        fetch("/api/products"),
        fetch("/api/orders"),
      ]);

      const productsData = await productsRes.json();
      const ordersData = await ordersRes.json();

      const productsList = productsData.products || [];
      const ordersList = ordersData.orders || [];

      const totalRevenue = ordersList.reduce(
        (sum: number, o: any) => sum + Number(o.total_amount),
        0
      );

      return {
        products: productsList.length,
        orders: ordersList.length,
        tickets: 0, // Mock for now
        leads: 0, // Mock for now
        revenue: totalRevenue,
      };
    },
  });

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        Dashboard Overview
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <StatCard label="Products" value={stats?.products ?? 0} icon={Package} color="bg-rh-blue/10 text-rh-blue" />
        <StatCard label="Orders" value={stats?.orders ?? 0} icon={ShoppingCart} color="bg-rh-green/10 text-rh-green" />
        <StatCard label="Revenue" value={`$${(stats?.revenue ?? 0).toFixed(2)}`} icon={DollarSign} color="bg-rh-orange/10 text-rh-orange" />
        <StatCard label="Tickets" value={stats?.tickets ?? 0} icon={Ticket} color="bg-primary/10 text-primary" />
        <StatCard label="CRM Leads" value={stats?.leads ?? 0} icon={Users} color="bg-rh-blue/10 text-rh-blue" />
      </div>
    </div>
  );
};

export default AdminOverview;
