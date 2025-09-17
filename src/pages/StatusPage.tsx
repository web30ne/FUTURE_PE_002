import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertCircle, Clock, TrendingUp } from 'lucide-react';

const StatusPage = () => {
  const currentStatus = {
    overall: "operational",
    lastUpdated: "2025-01-15 10:30:00 UTC"
  };

  const services = [
    {
      name: "API Gateway",
      status: "operational",
      uptime: "99.98%",
      responseTime: "145ms"
    },
    {
      name: "AI Content Generation",
      status: "operational", 
      uptime: "99.96%",
      responseTime: "2.1s"
    },
    {
      name: "Alert System",
      status: "operational",
      uptime: "99.99%",
      responseTime: "250ms"
    },
    {
      name: "Web Dashboard",
      status: "operational",
      uptime: "99.95%",
      responseTime: "180ms"
    },
    {
      name: "Database", 
      status: "operational",
      uptime: "99.97%",
      responseTime: "45ms"
    },
    {
      name: "File Storage",
      status: "operational",
      uptime: "99.94%", 
      responseTime: "320ms"
    }
  ];

  const incidents = [
    {
      id: "INC-2025-001",
      title: "Intermittent API Timeouts",
      status: "resolved",
      severity: "minor", 
      startTime: "2025-01-14 15:22:00 UTC",
      endTime: "2025-01-14 16:45:00 UTC",
      duration: "1h 23m",
      affectedServices: ["API Gateway", "AI Content Generation"],
      updates: [
        {
          time: "16:45:00 UTC",
          message: "Issue resolved. All services operating normally.",
          type: "resolved"
        },
        {
          time: "16:20:00 UTC", 
          message: "Deployed fix and monitoring recovery. API response times improving.",
          type: "update"
        },
        {
          time: "15:35:00 UTC",
          message: "Identified root cause as database connection pool exhaustion. Implementing fix.",
          type: "investigating"
        },
        {
          time: "15:22:00 UTC",
          message: "Investigating reports of increased API response times and timeouts.",
          type: "investigating"
        }
      ]
    },
    {
      id: "INC-2025-002",
      title: "Scheduled Database Maintenance",
      status: "completed",
      severity: "maintenance",
      startTime: "2025-01-12 02:00:00 UTC", 
      endTime: "2025-01-12 04:30:00 UTC",
      duration: "2h 30m",
      affectedServices: ["Database", "API Gateway"],
      updates: [
        {
          time: "04:30:00 UTC",
          message: "Maintenance completed successfully. All services restored.",
          type: "resolved"
        },
        {
          time: "02:00:00 UTC",
          message: "Scheduled maintenance began. Services may be temporarily unavailable.",
          type: "maintenance"
        }
      ]
    }
  ];

  const uptimeData = [
    { date: "Jan 8", uptime: 99.98 },
    { date: "Jan 9", uptime: 99.95 },
    { date: "Jan 10", uptime: 99.97 },
    { date: "Jan 11", uptime: 99.99 },
    { date: "Jan 12", uptime: 99.89 }, // Maintenance day
    { date: "Jan 13", uptime: 99.98 },
    { date: "Jan 14", uptime: 99.92 }, // Incident day
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'bg-green-500';
      case 'degraded': return 'bg-yellow-500';
      case 'partial_outage': return 'bg-orange-500';
      case 'major_outage': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'operational': return <Badge className="bg-green-500 hover:bg-green-600">Operational</Badge>;
      case 'degraded': return <Badge variant="secondary" className="bg-yellow-500 hover:bg-yellow-600">Degraded</Badge>;
      case 'partial_outage': return <Badge variant="secondary" className="bg-orange-500 hover:bg-orange-600">Partial Outage</Badge>;
      case 'major_outage': return <Badge variant="destructive">Major Outage</Badge>;
      case 'resolved': return <Badge variant="outline" className="text-green-600 border-green-600">Resolved</Badge>;
      case 'completed': return <Badge variant="outline" className="text-blue-600 border-blue-600">Completed</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-accent-light">
        <div className="container-narrow text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CheckCircle className="w-8 h-8 text-green-500" />
            <h1 className="text-4xl sm:text-5xl font-bold">
              RenderWeb <span className="text-primary">Status</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Real-time status and uptime monitoring for all RenderWeb services.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Last updated: {currentStatus.lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-8 border-b border-border/50">
        <div className="container-narrow">
          <div className="card-elevated">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(currentStatus.overall)}`}></div>
                  <span className="font-semibold">Overall Status</span>
                </div>
                {getStatusBadge(currentStatus.overall)}
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">99.96%</div>
                <div className="text-sm text-muted-foreground">30-day uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold mb-8 text-center">Service Status</h2>
          
          <div className="grid gap-4">
            {services.map((service, index) => (
              <div key={index} className="card-elevated">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(service.status)}`}></div>
                    <div>
                      <h3 className="font-semibold">{service.name}</h3>
                      {getStatusBadge(service.status)}
                    </div>
                  </div>
                  
                  <div className="flex gap-8 text-sm">
                    <div className="text-center">
                      <div className="font-semibold">{service.uptime}</div>
                      <div className="text-muted-foreground">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">{service.responseTime}</div>
                      <div className="text-muted-foreground">Response Time</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uptime Chart */}
      <section className="section-padding bg-accent-light">
        <div className="container-narrow">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">7-Day Uptime History</h2>
            <p className="text-muted-foreground">
              Daily uptime percentage across all services
            </p>
          </div>

          <div className="card-elevated">
            <div className="flex items-end justify-between gap-2 h-48 p-6">
              {uptimeData.map((day, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-primary rounded-t-sm min-h-[20px]" 
                    style={{ 
                      height: `${(day.uptime - 99) * 20}%`,
                      minHeight: day.uptime >= 99.95 ? '80%' : `${(day.uptime - 99) * 20}%`
                    }}
                  ></div>
                  <div className="text-xs text-muted-foreground mt-2 text-center">
                    <div>{day.date}</div>
                    <div className="font-semibold">{day.uptime}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Incident History */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Recent Incidents</h2>
            <p className="text-muted-foreground">
              Recent service incidents and maintenance windows
            </p>
          </div>

          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <div key={index} className="card-elevated">
                <div className="space-y-4">
                  {/* Incident Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{incident.title}</h3>
                        {getStatusBadge(incident.status)}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span>ID: {incident.id}</span>
                        <span>Duration: {incident.duration}</span>
                        <span>{incident.startTime} - {incident.endTime}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-2">
                        {incident.severity}
                      </Badge>
                      <div className="text-sm text-muted-foreground">
                        Affected: {incident.affectedServices.join(', ')}
                      </div>
                    </div>
                  </div>

                  {/* Updates Timeline */}
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-4">Updates</h4>
                    <div className="space-y-3">
                      {incident.updates.map((update, updateIndex) => (
                        <div key={updateIndex} className="flex gap-3">
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm font-medium">{update.time}</span>
                              <Badge variant="outline" className="text-xs">
                                {update.type}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground text-sm">{update.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-narrow text-center">
          <div className="card-elevated max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Get notified about service incidents and maintenance windows via email or SMS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-input flex-1 max-w-md"
              />
              <button className="btn-hero">
                Subscribe to Updates
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              You can also follow us on <a href="#" className="text-primary hover:underline">Twitter</a> for real-time updates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatusPage;