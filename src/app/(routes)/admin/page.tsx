// "use client";
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Badge } from "@/components/ui/badge";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import {
//   Plus,
//   Edit,
//   Trash2,
//   Search,
//   Calendar,
//   MapPin,
//   Clock,
//   Users,
//   RefreshCw,
// } from "lucide-react";
// import toast from "react-hot-toast";

// interface Event {
//   _id?: number;
//   title: string;
//   date: string;
//   time: string;
//   location: string;
//   type: string;
//   description: string;
//   image: string;
//   tags?: string[];
//   registrationOpen?: boolean;
//   outcome?: string;
//   participants?: number;
// }

// interface Opportunity {
//   _id?: number;
//   title: string;
//   organization: string;
//   description: string;
//   type: string;
//   deadline: string;
//   location: string;
//   featured: boolean;
//   tags: string[];
// }

// interface Gallery {
//   _id?: number;
//   title: string;
//   description: string;
//   image: string;
//   link: string;
// }

// const AdminPage = () => {
//   // ------------------------------ states ------------------------------
//   const [events, setEvents] = useState<Event[]>([]);
//   const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
//   const [gallery, setGallery] = useState<Gallery[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState("events");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [editingEvent, setEditingEvent] = useState<Event | null>(null);
//   const [editingOpportunity, setEditingOpportunity] =
//     useState<Opportunity | null>(null);
//   const [editingGalleryItem, setEditingGalleryItem] = useState<Gallery | null>(
//     null
//   );
//   const [isEventDialogOpen, setIsEventDialogOpen] = useState(false);
//   const [isOpportunityDialogOpen, setIsOpportunityDialogOpen] = useState(false);
//   const [isGalleryDialogOpen, setIsGalleryDialogOpen] = useState(false);

//   // ------------------------------ filtration through search ------------------------------
//   const filteredEvents = events.filter(
//     (event) =>
//       event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       event.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       event.type?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const filteredOpportunities = opportunities.filter(
//     (opportunity) =>
//       opportunity.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       opportunity.organization
//         ?.toLowerCase()
//         .includes(searchTerm.toLowerCase()) ||
//       opportunity.type?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       opportunity.location?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const filteredGallery = gallery.filter((item) =>
//     item.title?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // ------------------------------ handling events ------------------------------
//   const handleCreateEvent = async (formData: FormData) => {
//     try {
//       const participantsValue = formData.get("participants") as string;
//       const newEvent: Event = {
//         title: formData.get("title") as string,
//         date: formData.get("date") as string,
//         time: formData.get("time") as string,
//         location: formData.get("location") as string,
//         type: formData.get("type") as string,
//         image: formData.get("image") as string,
//         description: formData.get("description") as string,
//         tags:
//           (formData.get("tags") as string)
//             ?.split(",")
//             .map((tag) => tag.trim()) || [],
//         registrationOpen: formData.get("registrationOpen") === "on",
//         outcome: formData.get("outcome") as string,
//         participants: participantsValue ? Number(participantsValue) : undefined,
//       };

//       const response = await fetch("/api/admin/events", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "x-admin-token": process.env.NEXT_PUBLIC_ADMIN_TOKEN || "",
//         },
//         body: JSON.stringify(newEvent),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create event");
//       }

//       const createdEvent = await response.json();
//       setEvents((prev) => [...prev, createdEvent]);
//       toast.success("Event created successfully");
//       setIsEventDialogOpen(false);
//     } catch (error) {
//       toast.error("Failed to create event");
//     }
//   };

//   const handleUpdateEvent = async (formData: FormData) => {
//     if (!editingEvent) return;
//     try {
//       const participantsValue = formData.get("participants") as string;
//       const updatedEvent: Event = {
//         ...editingEvent,
//         title: formData.get("title") as string,
//         date: formData.get("date") as string,
//         time: formData.get("time") as string,
//         location: formData.get("location") as string,
//         type: formData.get("type") as string,
//         description: formData.get("description") as string,
//         tags:
//           (formData.get("tags") as string)
//             ?.split(",")
//             .map((tag) => tag.trim()) || [],
//         registrationOpen: formData.get("registrationOpen") === "on",
//         outcome: formData.get("outcome") as string,
//         participants: participantsValue ? Number(participantsValue) : undefined,
//       };

//       const response = await fetch(`/api/admin/events/${editingEvent._id}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           "x-admin-token": process.env.NEXT_PUBLIC_ADMIN_TOKEN || "",
//         },
//         body: JSON.stringify(updatedEvent),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to update event");
//       }

//       setEvents((prev) =>
//         prev.map((event) =>
//           event._id === editingEvent._id ? updatedEvent : event
//         )
//       );
//       toast.success("Event updated successfully");
//       setEditingEvent(null);
//       setIsEventDialogOpen(false);
//     } catch (error) {
//       toast.error("Failed to update event");
//     }
//   };

//   const handleDeleteEvent = async (id: number) => {
//     try {
//       const response = await fetch(`/api/admin/events/${id}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           "x-admin-token": process.env.NEXT_PUBLIC_ADMIN_TOKEN || "",
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to delete event");
//       }
//       setEvents((prev) => prev.filter((event) => event._id !== id));
//       toast.success("Event deleted successfully");
//     } catch (error) {
//       toast.error("Failed to delete event");
//     }
//   };

//   // ------------------------------ handling opportunities ------------------------------
//   const handleCreateOpportunity = async (formData: FormData) => {
//     try {
//       const newOpportunity: Opportunity = {
//         title: formData.get("title") as string,
//         organization: formData.get("organization") as string,
//         description: formData.get("description") as string,
//         type: formData.get("type") as string,
//         deadline: formData.get("deadline") as string,
//         location: formData.get("location") as string,
//         featured: formData.get("featured") === "on",
//         tags:
//           (formData.get("tags") as string)
//             ?.split(",")
//             .map((tag) => tag.trim()) || [],
//       };

//       // Make a POST request to the API
//       const response = await fetch("/api/admin/opportunities", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "x-admin-token": process.env.NEXT_PUBLIC_ADMIN_TOKEN || "",
//         },
//         body: JSON.stringify(newOpportunity),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create opportunity");
//       }

//       const createdOpportunity = await response.json();
//       setOpportunities((prev) => [...prev, createdOpportunity]);
//       toast.success("Opportunity created successfully");
//       setIsOpportunityDialogOpen(false);
//     } catch (error) {
//       toast.error("Failed to create opportunity");
//     }
//   };

//   const handleUpdateOpportunity = async (formData: FormData) => {
//     if (!editingOpportunity) return;
//     try {
//       const updatedOpportunity: Opportunity = {
//         ...editingOpportunity,
//         title: formData.get("title") as string,
//         organization: formData.get("organization") as string,
//         description: formData.get("description") as string,
//         type: formData.get("type") as string,
//         deadline: formData.get("deadline") as string,
//         location: formData.get("location") as string,
//         featured: formData.get("featured") === "on",
//         tags:
//           (formData.get("tags") as string)
//             ?.split(",")
//             .map((tag) => tag.trim()) || [],
//       };

//       // Make a PUT request to update the opportunity
//       const response = await fetch(
//         `/api/admin/opportunities/${editingOpportunity._id}`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//             "x-admin-token": process.env.NEXT_PUBLIC_ADMIN_TOKEN || "",
//           },
//           body: JSON.stringify(updatedOpportunity),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to update opportunity");
//       }

//       // Update the opportunities state with the updated opportunity
//       setOpportunities((prev) =>
//         prev.map((opp) =>
//           opp._id === editingOpportunity._id ? updatedOpportunity : opp
//         )
//       );
//       toast.success("Opportunity updated successfully");
//       setEditingOpportunity(null);
//       setIsOpportunityDialogOpen(false);
//     } catch (error) {
//       toast.error("Failed to update opportunity");
//     }
//   };

//   const handleDeleteOpportunity = async (id: number) => {
//     try {
//       // Make a DELETE request to the API
//       const response = await fetch(`/api/admin/opportunities/${id}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           "x-admin-token": process.env.NEXT_PUBLIC_ADMIN_TOKEN || "",
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to delete opportunity");
//       }

//       // Update the opportunities state by filtering out the deleted opportunity
//       setOpportunities((prev) => prev.filter((opp) => opp._id !== id));
//       toast.success("Opportunity deleted successfully");
//     } catch (error) {
//       toast.error("Failed to delete opportunity");
//     }
//   };

//   // ------------------------------ handling gallery ------------------------------
//   const handleCreateGalleryItem = async (formData: FormData) => {
//     try {
//       const newGalleryItem: Gallery = {
//         title: formData.get("title") as string,
//         description: formData.get("description") as string,
//         image: formData.get("image") as string,
//         link: formData.get("link") as string,
//       };

//       const response = await fetch("/api/admin/gallery", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "x-admin-token": process.env.NEXT_PUBLIC_ADMIN_TOKEN || "",
//         },
//         body: JSON.stringify(newGalleryItem),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create gallery item");
//       }

//       const createdGalleryItem = await response.json();
//       setGallery((prev) => [...prev, createdGalleryItem]);
//       toast.success("Gallery item created successfully");
//       setIsGalleryDialogOpen(false);
//     } catch (error) {
//       toast.error("Failed to create gallery item");
//     }
//   };

//   const handleUpdateGalleryItem = async (formData: FormData) => {
//     if (!editingGalleryItem) return;
//     try {
//       const updatedGalleryItem: Gallery = {
//         ...editingGalleryItem,
//         title: formData.get("title") as string,
//         description: formData.get("description") as string,
//         image: formData.get("image") as string,
//         link: formData.get("link") as string,
//       };

//       const response = await fetch(
//         `/api/admin/gallery/${editingGalleryItem._id}`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//             "x-admin-token": process.env.NEXT_PUBLIC_ADMIN_TOKEN || "",
//           },
//           body: JSON.stringify(updatedGalleryItem),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to update gallery item");
//       }

//       setGallery((prev) =>
//         prev.map((item) =>
//           item._id === editingGalleryItem._id ? updatedGalleryItem : item
//         )
//       );
//       toast.success("Gallery item updated successfully");
//       setEditingGalleryItem(null);
//       setIsGalleryDialogOpen(false);
//     } catch (error) {
//       toast.error("Failed to update gallery item");
//     }
//   };

//   const handleDeleteGalleryItem = async (id: number) => {
//     try {
//       const response = await fetch(`/api/admin/gallery/${id}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           "x-admin-token": process.env.NEXT_PUBLIC_ADMIN_TOKEN || "",
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to delete gallery item");
//       }
//       setGallery((prev) => prev.filter((item) => item._id !== id));
//       toast.success("Gallery item deleted successfully");
//     } catch (error) {
//       toast.error("Failed to delete gallery item");
//     }
//   };

//   // ------------------------------ functions to fetch data ------------------------------
//   const fetchEvents = async () => {
//     try {
//       setLoading(true);
//       const fetchedData = await fetch("/api/events");
//       const fetchedEvents = await fetchedData.json();
//       // console.log("fetchedEvents: ", fetchedEvents); // Debugging line
//       if (Array.isArray(fetchedEvents)) {
//         setEvents(fetchedEvents);
//       } else {
//         console.error(
//           "API /api/events did not return an array:",
//           fetchedEvents
//         );
//         setEvents([]); // Ensure it's always an array
//         toast.error("Invalid data received for events.");
//       }
//     } catch (e) {
//       console.error("Failed to fetch events:", e);
//       toast.error("Failed to fetch events.");
//       setEvents([]); // Ensure events is an array even on fetch error
//     } finally {
//       setLoading(false);
//     }
//   };
//   const fetchOpportunities = async () => {
//     try {
//       setLoading(true);
//       const fetchedData = await fetch("/api/opportunities");
//       const fetchedOpportunites = await fetchedData.json();
//       // console.log("fetchedOpportunites: ", fetchedOpportunites); // Debugging line
//       if (Array.isArray(fetchedOpportunites)) {
//         setOpportunities(fetchedOpportunites);
//       } else {
//         console.error(
//           "API /api/opportunities did not return an array:",
//           fetchedOpportunites
//         );
//         setOpportunities([]);
//         toast.error("Invalid data received for opportunities.");
//       }
//     } catch (e) {
//       console.error("Failed to fetch opportunities:", e);
//       toast.error("Failed to fetch opportunities.");
//       setOpportunities([]);
//     } finally {
//       setLoading(false);
//     }
//   };
//   const fetchGallery = async () => {
//     try {
//       setLoading(true);
//       const fetchedData = await fetch("/api/gallery");
//       const fetchedGallery = await fetchedData.json();
//       // console.log("fetchedGallery: ", fetchedGallery); // Debugging line
//       if (Array.isArray(fetchedGallery)) {
//         setGallery(fetchedGallery);
//       } else {
//         console.error(
//           "API /api/gallery did not return an array:",
//           fetchedGallery
//         );
//         setGallery([]);
//         toast.error("Invalid data received for gallery items.");
//       }
//     } catch (e) {
//       console.error("Failed to fetch gallery items:", e);
//       toast.error("Failed to fetch gallery items.");
//       setGallery([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOpportunities();
//     fetchEvents();
//     fetchGallery();
//   }, []);

//   return (
//     <div className="container mx-auto p-6 space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-foreground">Admin Panel</h1>
//           <p className="text-muted-foreground">
//             Manage events, opportunities, and gallery
//           </p>
//         </div>
//         <div className="flex items-center space-x-4">
//           <div className="text-center">
//             <div className="text-2xl font-bold text-primary">
//               {events.length}
//             </div>
//             <div className="text-sm text-muted-foreground">Events</div>
//           </div>
//           <div className="text-center">
//             <div className="text-2xl font-bold text-primary">
//               {opportunities.length}
//             </div>
//             <div className="text-sm text-muted-foreground">Opportunities</div>
//           </div>
//           <div className="text-center">
//             <div className="text-2xl font-bold text-primary">
//               {gallery.length}
//             </div>
//             <div className="text-sm text-muted-foreground">Gallery</div>
//           </div>
//         </div>
//       </div>
//       <Tabs
//         onValueChange={setActiveTab}
//         value={activeTab}
//         defaultValue="events"
//         className="space-y-6"
//       >
//         <TabsList className="grid w-full grid-cols-3">
//           <TabsTrigger value="events">Events ({events.length})</TabsTrigger>
//           <TabsTrigger value="opportunities">
//             Opportunities ({opportunities.length})
//           </TabsTrigger>
//           <TabsTrigger value="gallery">Gallery ({gallery.length})</TabsTrigger>
//         </TabsList>

//         {/* Events */}
//         <TabsContent value="events" className="space-y-6">
//           {/* add item */}
//           <div className="flex items-center justify-between">
//             {/* input */}
//             <div className="flex items-center space-x-2">
//               <Search className="h-4 w-4" />
//               <Input
//                 placeholder="Search events..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-64"
//               />
//             </div>
//             <div className="flex items-center justify-center gap-5">
//               {/* reload */}
//               <Button onClick={() => fetchEvents()}>
//                 <RefreshCw className="h-4 w-4" />
//                 Reload
//               </Button>
//               {/* add event */}
//               <Dialog
//                 open={isEventDialogOpen}
//                 onOpenChange={setIsEventDialogOpen}
//               >
//                 <DialogTrigger asChild>
//                   <Button onClick={() => setEditingEvent(null)}>
//                     <Plus className="h-4 w-4 mr-2" />
//                     Add Event
//                   </Button>
//                 </DialogTrigger>
//                 <DialogContent className="max-w-2xl">
//                   <DialogHeader>
//                     <DialogTitle>
//                       {editingEvent ? "Edit Event" : "Create New Event"}
//                     </DialogTitle>
//                     <DialogDescription>
//                       {editingEvent
//                         ? "Update the event details below."
//                         : "Fill in the details to create a new event."}
//                     </DialogDescription>
//                   </DialogHeader>
//                   <form
//                     className="h-[400px] overflow-scroll overflow-x-hidden"
//                     action={
//                       editingEvent ? handleUpdateEvent : handleCreateEvent
//                     }
//                   >
//                     <div className="grid gap-4 py-4">
//                       <div className="grid grid-cols-2 gap-4">
//                         <div className="grid gap-2">
//                           <Label htmlFor="title">Event Title</Label>
//                           <Input
//                             id="title"
//                             name="title"
//                             defaultValue={editingEvent?.title || ""}
//                             required
//                           />
//                         </div>
//                         <div className="grid gap-2">
//                           <Label htmlFor="type">Type</Label>
//                           <Input
//                             id="type"
//                             name="type"
//                             defaultValue={editingEvent?.type || ""}
//                             required
//                           />
//                         </div>
//                       </div>
//                       <div className="grid grid-cols-2 gap-4">
//                         <div className="grid gap-2">
//                           <Label htmlFor="date">Date</Label>
//                           <Input
//                             id="date"
//                             name="date"
//                             defaultValue={editingEvent?.date || ""}
//                             required
//                           />
//                         </div>
//                         <div className="grid gap-2">
//                           <Label htmlFor="time">Time</Label>
//                           <Input
//                             id="time"
//                             name="time"
//                             defaultValue={editingEvent?.time || ""}
//                           />
//                         </div>
//                       </div>
//                       <div className="grid gap-2">
//                         <Label htmlFor="location">Location</Label>
//                         <Input
//                           id="location"
//                           name="location"
//                           defaultValue={editingEvent?.location || ""}
//                           required
//                         />
//                       </div>
//                       <div className="grid gap-2">
//                         <Label htmlFor="description">Description</Label>
//                         <Textarea
//                           id="description"
//                           name="description"
//                           defaultValue={editingEvent?.description || ""}
//                           required
//                         />
//                       </div>
//                       <div className="grid gap-2">
//                         <Label htmlFor="tags">Tags (comma separated)</Label>
//                         <Input
//                           id="tags"
//                           name="tags"
//                           defaultValue={editingEvent?.tags?.join(", ") || ""}
//                         />
//                       </div>
//                       <div className="grid grid-cols-2 gap-4">
//                         <div className="grid gap-2">
//                           <Label htmlFor="participants">Participants</Label>
//                           <Input
//                             id="participants"
//                             name="participants"
//                             type="number"
//                             defaultValue={editingEvent?.participants || ""}
//                           />
//                         </div>
//                         <div className="flex items-center space-x-2 pt-6">
//                           <input
//                             type="checkbox"
//                             id="registrationOpen"
//                             name="registrationOpen"
//                             defaultChecked={
//                               editingEvent?.registrationOpen ?? true
//                             }
//                             className="rounded"
//                           />
//                           <Label htmlFor="registrationOpen">
//                             Registration Open
//                           </Label>
//                         </div>
//                       </div>
//                       <div className="grid gap-2">
//                         <Label htmlFor="outcome">Outcome</Label>
//                         <Textarea
//                           id="outcome"
//                           name="outcome"
//                           defaultValue={editingEvent?.outcome || ""}
//                           placeholder="Describe the outcome of the event..."
//                         />
//                       </div>
//                       <div>
//                         <Label htmlFor="image">Image URL</Label>
//                         <Input
//                           id="image"
//                           name="image"
//                           defaultValue={editingEvent?.image || ""}
//                           placeholder="https://example.com/image.jpg"
//                           required
//                         />
//                       </div>
//                     </div>
//                     <DialogFooter>
//                       <Button type="submit">
//                         {editingEvent ? "Update Event" : "Create Event"}
//                       </Button>
//                     </DialogFooter>
//                   </form>
//                 </DialogContent>
//               </Dialog>
//             </div>
//           </div>

//           <div className="grid gap-4">
//             {loading ? (
//               <div className="text-center py-8">Loading events...</div>
//             ) : filteredEvents.length === 0 ? (
//               <div className="text-center py-8 text-muted-foreground">
//                 No events found
//               </div>
//             ) : (
//               filteredEvents.map((event) => (
//                 <Card key={event._id}>
//                   <CardHeader>
//                     <div className="flex items-center justify-between">
//                       <div className="space-y-1">
//                         <CardTitle className="text-lg">{event.title}</CardTitle>
//                         <div className="flex items-center space-x-2">
//                           <Badge variant="secondary">{event.type}</Badge>
//                           {event.tags?.map((tag, ind) => (
//                             <Badge key={ind} variant="outline">
//                               {tag}
//                             </Badge>
//                           ))}
//                         </div>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <Button
//                           variant="outline"
//                           size="sm"
//                           onClick={() => {
//                             setEditingEvent(event);
//                             setIsEventDialogOpen(true);
//                           }}
//                         >
//                           <Edit className="h-4 w-4" />
//                         </Button>
//                         <AlertDialog>
//                           <AlertDialogTrigger asChild>
//                             <Button variant="outline" size="sm">
//                               <Trash2 className="h-4 w-4" />
//                             </Button>
//                           </AlertDialogTrigger>
//                           <AlertDialogContent>
//                             <AlertDialogHeader>
//                               <AlertDialogTitle>Delete Event</AlertDialogTitle>
//                               <AlertDialogDescription>
//                                 Are you sure you want to delete this event? This
//                                 action cannot be undone.
//                               </AlertDialogDescription>
//                             </AlertDialogHeader>
//                             <AlertDialogFooter>
//                               <AlertDialogCancel>Cancel</AlertDialogCancel>
//                               <AlertDialogAction
//                                 onClick={() => handleDeleteEvent(event._id!)}
//                               >
//                                 Delete
//                               </AlertDialogAction>
//                             </AlertDialogFooter>
//                           </AlertDialogContent>
//                         </AlertDialog>
//                       </div>
//                     </div>
//                   </CardHeader>
//                   <CardContent>
//                     <CardDescription className="mb-3">
//                       {event.description}
//                     </CardDescription>
//                     <div className="flex items-center space-x-4 text-sm text-muted-foreground">
//                       <div className="flex items-center space-x-1">
//                         <MapPin className="h-4 w-4" />
//                         <span>{event.location}</span>
//                       </div>
//                       <div className="flex items-center space-x-1">
//                         <Calendar className="h-4 w-4" />
//                         <span>
//                           {event.date}
//                         </span>
//                       </div>
//                       {event.time && (
//                         <div className="flex items-center space-x-1">
//                           <Clock className="h-4 w-4" />
//                           <span>{event.time}</span>
//                         </div>
//                       )}
//                       {typeof event.participants === "number" && (
//                         <div className="flex items-center space-x-1">
//                           <Users className="h-4 w-4" />
//                           <span>{event.participants} participants</span>
//                         </div>
//                       )}
//                     </div>
//                     {event.outcome && (
//                       <div className="mt-2 p-2 bg-muted rounded text-sm">
//                         <strong>Outcome:</strong> {event.outcome}
//                       </div>
//                     )}
//                   </CardContent>
//                 </Card>
//               ))
//             )}
//           </div>
//         </TabsContent>

//         {/* Opportunities */}
//         <TabsContent value="opportunities" className="space-y-6">
//           <div className="flex items-center justify-between">
//             {/* input */}
//             <div className="flex items-center space-x-2">
//               <Search className="h-4 w-4 text-muted-foreground" />
//               <Input
//                 placeholder="Search opportunities..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-64"
//               />
//             </div>

//             <div className="flex items-center justify-center gap-5">
//               {/* reload */}
//               <Button onClick={() => fetchOpportunities()}>
//                 <RefreshCw className="h-4 w-4" />
//                 Reload
//               </Button>
//               {/* add opportunity */}
//               <Dialog
//                 open={isOpportunityDialogOpen}
//                 onOpenChange={setIsOpportunityDialogOpen}
//               >
//                 <DialogTrigger asChild>
//                   <Button onClick={() => setEditingOpportunity(null)}>
//                     <Plus className="h-4 w-4 mr-2" />
//                     Add Opportunity
//                   </Button>
//                 </DialogTrigger>
//                 <DialogContent className="max-w-2xl">
//                   <DialogHeader>
//                     <DialogTitle>
//                       {editingOpportunity
//                         ? "Edit Opportunity"
//                         : "Create New Opportunity"}
//                     </DialogTitle>
//                     <DialogDescription>
//                       {editingOpportunity
//                         ? "Update the opportunity details below."
//                         : "Fill in the details to create a new opportunity."}
//                     </DialogDescription>
//                   </DialogHeader>
//                   <form
//                     action={
//                       editingOpportunity
//                         ? handleUpdateOpportunity
//                         : handleCreateOpportunity
//                     }
//                   >
//                     <div className="grid gap-4 py-4">
//                       <div className="grid grid-cols-2 gap-4">
//                         <div className="grid gap-2">
//                           <Label htmlFor="title">Title</Label>
//                           <Input
//                             id="title"
//                             name="title"
//                             defaultValue={editingOpportunity?.title || ""}
//                             required
//                           />
//                         </div>
//                         <div className="grid gap-2">
//                           <Label htmlFor="organization">Organization</Label>
//                           <Input
//                             id="organization"
//                             name="organization"
//                             defaultValue={
//                               editingOpportunity?.organization || ""
//                             }
//                             required
//                           />
//                         </div>
//                       </div>
//                       <div className="grid gap-2">
//                         <Label htmlFor="description">Description</Label>
//                         <Textarea
//                           id="description"
//                           name="description"
//                           defaultValue={editingOpportunity?.description || ""}
//                           required
//                         />
//                       </div>
//                       <div className="grid grid-cols-3 gap-4">
//                         <div className="grid gap-2">
//                           <Label htmlFor="type">Type</Label>
//                           <Input
//                             id="type"
//                             name="type"
//                             defaultValue={editingOpportunity?.type || ""}
//                             required
//                           />
//                         </div>
//                         <div className="grid gap-2">
//                           <Label htmlFor="deadline">Deadline</Label>
//                           <Input
//                             id="deadline"
//                             name="deadline"
//                             defaultValue={editingOpportunity?.deadline || ""}
//                             required
//                           />
//                         </div>
//                         <div className="grid gap-2">
//                           <Label htmlFor="location">Location</Label>
//                           <Input
//                             id="location"
//                             name="location"
//                             defaultValue={editingOpportunity?.location || ""}
//                             required
//                           />
//                         </div>
//                       </div>
//                       <div className="grid gap-2">
//                         <Label htmlFor="tags">Tags (comma separated)</Label>
//                         <Input
//                           id="tags"
//                           name="tags"
//                           defaultValue={
//                             editingOpportunity?.tags?.join(", ") || ""
//                           }
//                         />
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <input
//                           type="checkbox"
//                           id="featured"
//                           name="featured"
//                           defaultChecked={editingOpportunity?.featured || false}
//                           className="rounded"
//                         />
//                         <Label htmlFor="featured">Featured opportunity</Label>
//                       </div>
//                     </div>
//                     <DialogFooter>
//                       <Button type="submit">
//                         {editingOpportunity
//                           ? "Update Opportunity"
//                           : "Create Opportunity"}
//                       </Button>
//                     </DialogFooter>
//                   </form>
//                 </DialogContent>
//               </Dialog>
//             </div>
//           </div>

//           <div className="grid gap-4">
//             {loading ? (
//               <div className="text-center py-8">Loading opportunities...</div>
//             ) : opportunities.length === 0 ? (
//               <div className="text-center py-8 text-muted-foreground">
//                 No opportunities found
//               </div>
//             ) : (
//               filteredOpportunities.map((opportunity) => (
//                 <Card key={opportunity._id}>
//                   <CardHeader>
//                     <div className="flex items-center justify-between">
//                       <div className="space-y-1">
//                         <CardTitle className="text-lg flex items-center gap-2">
//                           {opportunity.title}
//                           {opportunity.featured && (
//                             <Badge variant="default">Featured</Badge>
//                           )}
//                         </CardTitle>
//                         <div className="flex items-center space-x-2">
//                           <Badge variant="secondary">{opportunity.type}</Badge>
//                           {opportunity.tags?.map((tag) => (
//                             <Badge key={tag} variant="outline">
//                               {tag}
//                             </Badge>
//                           ))}
//                         </div>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         {/* edit */}
//                         <Button
//                           variant="outline"
//                           size="sm"
//                           onClick={() => {
//                             setEditingOpportunity(opportunity);
//                             setIsOpportunityDialogOpen(true);
//                           }}
//                         >
//                           <Edit className="h-4 w-4" />
//                         </Button>
//                         {/* delete */}
//                         <AlertDialog>
//                           <AlertDialogTrigger asChild>
//                             <Button variant="outline" size="sm">
//                               <Trash2 className="h-4 w-4" />
//                             </Button>
//                           </AlertDialogTrigger>
//                           <AlertDialogContent>
//                             <AlertDialogHeader>
//                               <AlertDialogTitle>
//                                 Delete Opportunity
//                               </AlertDialogTitle>
//                               <AlertDialogDescription>
//                                 Are you sure you want to delete this
//                                 opportunity? This action cannot be undone.
//                               </AlertDialogDescription>
//                             </AlertDialogHeader>
//                             <AlertDialogFooter>
//                               <AlertDialogCancel>Cancel</AlertDialogCancel>
//                               <AlertDialogAction
//                                 onClick={() =>
//                                   handleDeleteOpportunity(opportunity._id!)
//                                 }
//                               >
//                                 Delete
//                               </AlertDialogAction>
//                             </AlertDialogFooter>
//                           </AlertDialogContent>
//                         </AlertDialog>
//                       </div>
//                     </div>
//                   </CardHeader>
//                   <CardContent>
//                     <CardDescription className="mb-3">
//                       {opportunity.description}
//                     </CardDescription>
//                     <div className="flex items-center space-x-4 text-sm text-muted-foreground">
//                       <div className="flex items-center space-x-1">
//                         <span className="font-medium">Organization:</span>
//                         <span>{opportunity.organization}</span>
//                       </div>
//                       <div className="flex items-center space-x-1">
//                         <MapPin className="h-4 w-4" />
//                         <span>{opportunity.location}</span>
//                       </div>
//                       <div className="flex items-center space-x-1">
//                         <Calendar className="h-4 w-4" />
//                         <span>Deadline: {opportunity.deadline}</span>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))
//             )}
//           </div>
//         </TabsContent>

//         {/* Gallery */}
//         <TabsContent value="gallery" className="space-y-6">
//           <div className="flex items-center justify-between">
//             {/* input */}
//             <div className="flex items-center space-x-2">
//               <Search className="h-4 w-4 text-muted-foreground" />
//               <Input
//                 placeholder="Search gallery..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-64"
//               />
//             </div>

//             <div className="flex items-center justify-center gap-5">
//               {/* reload */}
//               <Button onClick={() => fetchGallery()}>
//                 <RefreshCw className="h-4 w-4" />
//                 Reload
//               </Button>
//               {/* add item */}
//               <Dialog
//                 open={isGalleryDialogOpen}
//                 onOpenChange={setIsGalleryDialogOpen}
//               >
//                 <DialogTrigger asChild>
//                   <Button onClick={() => setEditingGalleryItem(null)}>
//                     <Plus className="h-4 w-4 mr-2" />
//                     Add Gallery Item
//                   </Button>
//                 </DialogTrigger>
//                 <DialogContent className="max-w-2xl">
//                   <DialogHeader>
//                     <DialogTitle>
//                       {editingGalleryItem
//                         ? "Edit Gallery Item"
//                         : "Create New Gallery Item"}
//                     </DialogTitle>
//                     <DialogDescription>
//                       {editingGalleryItem
//                         ? "Update the gallery item details below."
//                         : "Fill in the details to create a new gallery item."}
//                     </DialogDescription>
//                   </DialogHeader>
//                   <form
//                     action={
//                       editingGalleryItem
//                         ? handleUpdateGalleryItem
//                         : handleCreateGalleryItem
//                     }
//                   >
//                     <div className="grid gap-4 py-4">
//                       <div className="grid gap-2">
//                         <Label htmlFor="title">Title</Label>
//                         <Input
//                           id="title"
//                           name="title"
//                           defaultValue={editingGalleryItem?.title || ""}
//                           required
//                         />
//                       </div>
//                       <div className="grid gap-2">
//                         <Label htmlFor="description">Description</Label>
//                         <Textarea
//                           id="description"
//                           name="description"
//                           defaultValue={editingGalleryItem?.description || ""}
//                           required
//                         />
//                       </div>
//                       <div className="grid gap-2">
//                         <Label htmlFor="image">Image URL</Label>
//                         <Input
//                           id="image"
//                           name="image"
//                           defaultValue={editingGalleryItem?.image || ""}
//                           required
//                         />
//                       </div>
//                       <div className="grid gap-2">
//                         <Label htmlFor="link">Link</Label>
//                         <Input
//                           id="link"
//                           name="link"
//                           defaultValue={editingGalleryItem?.link || ""}
//                           required
//                         />
//                       </div>
//                     </div>
//                     <DialogFooter>
//                       <Button type="submit">
//                         {editingGalleryItem
//                           ? "Update Gallery Item"
//                           : "Create Gallery Item"}
//                       </Button>
//                     </DialogFooter>
//                   </form>
//                 </DialogContent>
//               </Dialog>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {loading ? (
//               <div className="text-center py-8 col-span-full">
//                 Loading gallery...
//               </div>
//             ) : filteredGallery.length === 0 ? (
//               <div className="text-center py-8 text-muted-foreground col-span-full">
//                 No gallery items found
//               </div>
//             ) : (
//               filteredGallery.map((item) => (
//                 <Card key={item._id} className="overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="h-48 w-full object-cover"
//                   />
//                   <CardHeader>
//                     <div className="flex items-center justify-between">
//                       <CardTitle>{item.title}</CardTitle>
//                       <div className="flex items-center space-x-2">
//                         <Button
//                           variant="outline"
//                           size="sm"
//                           onClick={() => {
//                             setEditingGalleryItem(item);
//                             setIsGalleryDialogOpen(true);
//                           }}
//                         >
//                           <Edit className="h-4 w-4" />
//                         </Button>
//                         <AlertDialog>
//                           <AlertDialogTrigger asChild>
//                             <Button variant="outline" size="sm">
//                               <Trash2 className="h-4 w-4" />
//                             </Button>
//                           </AlertDialogTrigger>
//                           <AlertDialogContent>
//                             <AlertDialogHeader>
//                               <AlertDialogTitle>
//                                 Delete Gallery Item
//                               </AlertDialogTitle>
//                               <AlertDialogDescription>
//                                 Are you sure you want to delete this gallery
//                                 item? This action cannot be undone.
//                               </AlertDialogDescription>
//                             </AlertDialogHeader>
//                             <AlertDialogFooter>
//                               <AlertDialogCancel>Cancel</AlertDialogCancel>
//                               <AlertDialogAction
//                                 onClick={() =>
//                                   handleDeleteGalleryItem(item._id!)
//                                 }
//                               >
//                                 Delete
//                               </AlertDialogAction>
//                             </AlertDialogFooter>
//                           </AlertDialogContent>
//                         </AlertDialog>
//                       </div>
//                     </div>
//                   </CardHeader>
//                   <CardContent>
//                     <CardDescription>{item.description}</CardDescription>
//                     <div className="mt-4">
//                       <Button asChild variant="link" className="p-0 h-auto">
//                         <a
//                           href={item.link}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           View More
//                         </a>
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))
//             )}
//           </div>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };

// export default AdminPage;


"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Plus,
  Edit,
  Trash2,
  Search,
  Calendar,
  MapPin,
  Clock,
  Users,
  RefreshCw,
} from "lucide-react";
import toast from "react-hot-toast";

interface Event {
  _id?: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  description: string;
  image: string;
  tags?: string[];
  registrationOpen?: boolean;
  outcome?: string;
  participants?: number;
  isPast?: boolean;
}

interface Opportunity {
  _id?: number;
  title: string;
  organization: string;
  description: string;
  type: string;
  deadline: string;
  location: string;
  featured: boolean;
  tags: string[];
}

interface Gallery {
  _id?: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const AdminPage = () => {
  // ------------------------------ states ------------------------------
  const [events, setEvents] = useState<Event[]>([]);
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [gallery, setGallery] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("events");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [editingOpportunity, setEditingOpportunity] =
    useState<Opportunity | null>(null);
  const [editingGalleryItem, setEditingGalleryItem] = useState<Gallery | null>(
    null
  );
  const [isEventDialogOpen, setIsEventDialogOpen] = useState(false);
  const [isOpportunityDialogOpen, setIsOpportunityDialogOpen] = useState(false);
  const [isGalleryDialogOpen, setIsGalleryDialogOpen] = useState(false);

  // ------------------------------ filtration through search ------------------------------
  const filteredEvents = events.filter(
    (event) =>
      event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.type?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredOpportunities = opportunities.filter(
    (opportunity) =>
      opportunity.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opportunity.organization
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      opportunity.type?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opportunity.location?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredGallery = gallery.filter((item) =>
    item.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ------------------------------ handling events ------------------------------
  const handleCreateEvent = async (formData: FormData) => {
    try {
      const participantsValue = formData.get("participants") as string;
      const newEvent: Event = {
        title: formData.get("title") as string,
        date: formData.get("date") as string,
        time: formData.get("time") as string,
        location: formData.get("location") as string,
        type: formData.get("type") as string,
        image: formData.get("image") as string,
        description: formData.get("description") as string,
        tags:
          (formData.get("tags") as string)
            ?.split(",")
            .map((tag) => tag.trim()) || [],
        registrationOpen: formData.get("registrationOpen") === "on",
        outcome: formData.get("outcome") as string,
        participants: participantsValue ? Number(participantsValue) : undefined,
        isPast: formData.get("isPast") === "on",
      };

      const response = await fetch("/api/admin/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": process.env.NEXT_PUBLIC_ADMIN_TOKEN || "",
        },
        body: JSON.stringify(newEvent),
      });

      if (!response.ok) {
        throw new Error("Failed to create event");
      }

      const createdEvent = await response.json();
      setEvents((prev) => [...prev, createdEvent]);
      toast.success("Event created successfully");
      setIsEventDialogOpen(false);
    } catch (error) {
      toast.error("Failed to create event");
    }
  };

  const handleUpdateEvent = async (formData: FormData) => {
    if (!editingEvent) return;
    try {
      const participantsValue = formData.get("participants") as string;
      const updatedEvent: Event = {
        ...editingEvent,
        title: formData.get("title") as string,
        date: formData.get("date") as string,
        time: formData.get("time") as string,
        location: formData.get("location") as string,
        type: formData.get("type") as string,
        description: formData.get("description") as string,
        tags:
          (formData.get("tags") as string)
            ?.split(",")
            .map((tag) => tag.trim()) || [],
        registrationOpen: formData.get("registrationOpen") === "on",
        outcome: formData.get("outcome") as string,
        participants: participantsValue ? Number(participantsValue) : undefined,
        isPast: formData.get("isPast") === "on",
      };

      const response = await fetch(`/api/admin/events/${editingEvent._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": process.env.NEXT_PUBLIC_ADMIN_TOKEN || "",
        },
        body: JSON.stringify(updatedEvent),
      });

      if (!response.ok) {
        throw new Error("Failed to update event");
      }

      setEvents((prev) =>
        prev.map((event) =>
          event._id === editingEvent._id ? updatedEvent : event
        )
      );
      toast.success("Event updated successfully");
      setEditingEvent(null);
      setIsEventDialogOpen(false);
    } catch (error) {
      toast.error("Failed to update event");
    }
  };

  const handleDeleteEvent = async (id: number) => {
    try {
      const response = await fetch(`/api/admin/events/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": process.env.NEXT_PUBLIC_ADMIN_TOKEN || "",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete event");
      }
      setEvents((prev) => prev.filter((event) => event._id !== id));
      toast.success("Event deleted successfully");
    } catch (error) {
      toast.error("Failed to delete event");
    }
  };

  // ------------------------------ handling opportunities ------------------------------
  const handleCreateOpportunity = async (formData: FormData) => {
    try {
      const newOpportunity: Opportunity = {
        title: formData.get("title") as string,
        organization: formData.get("organization") as string,
        description: formData.get("description") as string,
        type: formData.get("type") as string,
        deadline: formData.get("deadline") as string,
        location: formData.get("location") as string,
        featured: formData.get("featured") === "on",
        tags:
          (formData.get("tags") as string)
            ?.split(",")
            .map((tag) => tag.trim()) || [],
      };

      // Make a POST request to the API
      const response = await fetch("/api/admin/opportunities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": process.env.NEXT_PUBLIC_ADMIN_TOKEN || "",
        },
        body: JSON.stringify(newOpportunity),
      });

      if (!response.ok) {
        throw new Error("Failed to create opportunity");
      }

      const createdOpportunity = await response.json();
      setOpportunities((prev) => [...prev, createdOpportunity]);
      toast.success("Opportunity created successfully");
      setIsOpportunityDialogOpen(false);
    } catch (error) {
      toast.error("Failed to create opportunity");
    }
  };

  const handleUpdateOpportunity = async (formData: FormData) => {
    if (!editingOpportunity) return;
    try {
      const updatedOpportunity: Opportunity = {
        ...editingOpportunity,
        title: formData.get("title") as string,
        organization: formData.get("organization") as string,
        description: formData.get("description") as string,
        type: formData.get("type") as string,
        deadline: formData.get("deadline") as string,
        location: formData.get("location") as string,
        featured: formData.get("featured") === "on",
        tags:
          (formData.get("tags") as string)
            ?.split(",")
            .map((tag) => tag.trim()) || [],
      };

      // Make a PUT request to update the opportunity
      const response = await fetch(
        `/api/admin/opportunities/${editingOpportunity._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "x-admin-token": process.env.NEXT_PUBLIC_ADMIN_TOKEN || "",
          },
          body: JSON.stringify(updatedOpportunity),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update opportunity");
      }

      // Update the opportunities state with the updated opportunity
      setOpportunities((prev) =>
        prev.map((opp) =>
          opp._id === editingOpportunity._id ? updatedOpportunity : opp
        )
      );
      toast.success("Opportunity updated successfully");
      setEditingOpportunity(null);
      setIsOpportunityDialogOpen(false);
    } catch (error) {
      toast.error("Failed to update opportunity");
    }
  };

  const handleDeleteOpportunity = async (id: number) => {
    try {
      // Make a DELETE request to the API
      const response = await fetch(`/api/admin/opportunities/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": process.env.NEXT_PUBLIC_ADMIN_TOKEN || "",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete opportunity");
      }

      // Update the opportunities state by filtering out the deleted opportunity
      setOpportunities((prev) => prev.filter((opp) => opp._id !== id));
      toast.success("Opportunity deleted successfully");
    } catch (error) {
      toast.error("Failed to delete opportunity");
    }
  };

  // ------------------------------ handling gallery ------------------------------
  const handleCreateGalleryItem = async (formData: FormData) => {
    try {
      const newGalleryItem: Gallery = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        image: formData.get("image") as string,
        link: formData.get("link") as string,
      };

      const response = await fetch("/api/admin/gallery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": process.env.NEXT_PUBLIC_ADMIN_TOKEN || "",
        },
        body: JSON.stringify(newGalleryItem),
      });

      if (!response.ok) {
        throw new Error("Failed to create gallery item");
      }

      const createdGalleryItem = await response.json();
      setGallery((prev) => [...prev, createdGalleryItem]);
      toast.success("Gallery item created successfully");
      setIsGalleryDialogOpen(false);
    } catch (error) {
      toast.error("Failed to create gallery item");
    }
  };

  const handleUpdateGalleryItem = async (formData: FormData) => {
    if (!editingGalleryItem) return;
    try {
      const updatedGalleryItem: Gallery = {
        ...editingGalleryItem,
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        image: formData.get("image") as string,
        link: formData.get("link") as string,
      };

      const response = await fetch(
        `/api/admin/gallery/${editingGalleryItem._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "x-admin-token": process.env.NEXT_PUBLIC_ADMIN_TOKEN || "",
          },
          body: JSON.stringify(updatedGalleryItem),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update gallery item");
      }

      setGallery((prev) =>
        prev.map((item) =>
          item._id === editingGalleryItem._id ? updatedGalleryItem : item
        )
      );
      toast.success("Gallery item updated successfully");
      setEditingGalleryItem(null);
      setIsGalleryDialogOpen(false);
    } catch (error) {
      toast.error("Failed to update gallery item");
    }
  };

  const handleDeleteGalleryItem = async (id: number) => {
    try {
      const response = await fetch(`/api/admin/gallery/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": process.env.NEXT_PUBLIC_ADMIN_TOKEN || "",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete gallery item");
      }
      setGallery((prev) => prev.filter((item) => item._id !== id));
      toast.success("Gallery item deleted successfully");
    } catch (error) {
      toast.error("Failed to delete gallery item");
    }
  };

  // ------------------------------ functions to fetch data ------------------------------
  const fetchEvents = async () => {
    try {
      setLoading(true);
      const fetchedData = await fetch("/api/events");
      const fetchedEvents = await fetchedData.json();
      // console.log("fetchedEvents: ", fetchedEvents); // Debugging line
      if (Array.isArray(fetchedEvents)) {
        setEvents(fetchedEvents);
      } else {
        console.error(
          "API /api/events did not return an array:",
          fetchedEvents
        );
        setEvents([]); // Ensure it's always an array
        toast.error("Invalid data received for events.");
      }
    } catch (e) {
      console.error("Failed to fetch events:", e);
      toast.error("Failed to fetch events.");
      setEvents([]); // Ensure events is an array even on fetch error
    } finally {
      setLoading(false);
    }
  };
  const fetchOpportunities = async () => {
    try {
      setLoading(true);
      const fetchedData = await fetch("/api/opportunities");
      const fetchedOpportunites = await fetchedData.json();
      // console.log("fetchedOpportunites: ", fetchedOpportunites); // Debugging line
      if (Array.isArray(fetchedOpportunites)) {
        setOpportunities(fetchedOpportunites);
      } else {
        console.error(
          "API /api/opportunities did not return an array:",
          fetchedOpportunites
        );
        setOpportunities([]);
        toast.error("Invalid data received for opportunities.");
      }
    } catch (e) {
      console.error("Failed to fetch opportunities:", e);
      toast.error("Failed to fetch opportunities.");
      setOpportunities([]);
    } finally {
      setLoading(false);
    }
  };
  const fetchGallery = async () => {
    try {
      setLoading(true);
      const fetchedData = await fetch("/api/gallery");
      const fetchedGallery = await fetchedData.json();
      // console.log("fetchedGallery: ", fetchedGallery); // Debugging line
      if (Array.isArray(fetchedGallery)) {
        setGallery(fetchedGallery);
      } else {
        console.error(
          "API /api/gallery did not return an array:",
          fetchedGallery
        );
        setGallery([]);
        toast.error("Invalid data received for gallery items.");
      }
    } catch (e) {
      console.error("Failed to fetch gallery items:", e);
      toast.error("Failed to fetch gallery items.");
      setGallery([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOpportunities();
    fetchEvents();
    fetchGallery();
  }, []);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Admin Panel</h1>
          <p className="text-muted-foreground">
            Manage events, opportunities, and gallery
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">
              {events.length}
            </div>
            <div className="text-sm text-muted-foreground">Events</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">
              {opportunities.length}
            </div>
            <div className="text-sm text-muted-foreground">Opportunities</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">
              {gallery.length}
            </div>
            <div className="text-sm text-muted-foreground">Gallery</div>
          </div>
        </div>
      </div>
      <Tabs
        onValueChange={setActiveTab}
        value={activeTab}
        defaultValue="events"
        className="space-y-6"
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="events">Events ({events.length})</TabsTrigger>
          <TabsTrigger value="opportunities">
            Opportunities ({opportunities.length})
          </TabsTrigger>
          <TabsTrigger value="gallery">Gallery ({gallery.length})</TabsTrigger>
        </TabsList>

        {/* Events */}
        <TabsContent value="events" className="space-y-6">
          {/* add item */}
          <div className="flex items-center justify-between">
            {/* input */}
            <div className="flex items-center space-x-2">
              <Search className="h-4 w-4" />
              <Input
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64"
              />
            </div>
            <div className="flex items-center justify-center gap-5">
              {/* reload */}
              <Button onClick={() => fetchEvents()}>
                <RefreshCw className="h-4 w-4" />
                Reload
              </Button>
              {/* add event */}
              <Dialog
                open={isEventDialogOpen}
                onOpenChange={setIsEventDialogOpen}
              >
                <DialogTrigger asChild>
                  <Button onClick={() => setEditingEvent(null)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Event
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>
                      {editingEvent ? "Edit Event" : "Create New Event"}
                    </DialogTitle>
                    <DialogDescription>
                      {editingEvent
                        ? "Update the event details below."
                        : "Fill in the details to create a new event."}
                    </DialogDescription>
                  </DialogHeader>
                  <form
                    className="h-[400px] overflow-scroll overflow-x-hidden"
                    action={
                      editingEvent ? handleUpdateEvent : handleCreateEvent
                    }
                  >
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="title">Event Title</Label>
                          <Input
                            id="title"
                            name="title"
                            defaultValue={editingEvent?.title || ""}
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="type">Type</Label>
                          <Input
                            id="type"
                            name="type"
                            defaultValue={editingEvent?.type || ""}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="date">Date</Label>
                          <Input
                            id="date"
                            name="date"
                            defaultValue={editingEvent?.date || ""}
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="time">Time</Label>
                          <Input
                            id="time"
                            name="time"
                            defaultValue={editingEvent?.time || ""}
                          />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          name="location"
                          defaultValue={editingEvent?.location || ""}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          name="description"
                          defaultValue={editingEvent?.description || ""}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="tags">Tags (comma separated)</Label>
                        <Input
                          id="tags"
                          name="tags"
                          defaultValue={editingEvent?.tags?.join(", ") || ""}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="participants">Participants</Label>
                          <Input
                            id="participants"
                            name="participants"
                            type="number"
                            defaultValue={editingEvent?.participants || ""}
                          />
                        </div>
                        <div className="flex items-center space-x-2 pt-6">
                          <input
                            type="checkbox"
                            id="registrationOpen"
                            name="registrationOpen"
                            defaultChecked={
                              editingEvent?.registrationOpen ?? true
                            }
                            className="rounded"
                          />
                          <Label htmlFor="registrationOpen">
                            Registration Open
                          </Label>
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="outcome">Outcome</Label>
                        <Textarea
                          id="outcome"
                          name="outcome"
                          defaultValue={editingEvent?.outcome || ""}
                          placeholder="Describe the outcome of the event..."
                        />
                      </div>
                      <div>
                        <Label htmlFor="image">Image URL</Label>
                        <Input
                          id="image"
                          name="image"
                          defaultValue={editingEvent?.image || ""}
                          placeholder="https://example.com/image.jpg"
                          required
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="isPast"
                          name="isPast"
                          defaultChecked={editingEvent?.isPast || false}
                          className="rounded"
                          required
                        />
                        <Label htmlFor="isPast">Is this a past event?</Label>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">
                        {editingEvent ? "Update Event" : "Create Event"}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="grid gap-4">
            {loading ? (
              <div className="text-center py-8">Loading events...</div>
            ) : filteredEvents.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No events found
              </div>
            ) : (
              filteredEvents.map((event) => (
                <Card key={event._id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg flex items-center gap-2">
                          {event.title}
                          {event.isPast ? (
                            <Badge variant="outline">Past</Badge>
                          ):(
                            <Badge variant="outline">Upcoming</Badge>
                          )}
                        </CardTitle>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">{event.type}</Badge>
                          {event.tags?.map((tag, ind) => (
                            <Badge key={ind} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setEditingEvent(event);
                            setIsEventDialogOpen(true);
                          }}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete Event</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete this event? This
                                action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDeleteEvent(event._id!)}
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-3">
                      {event.description}
                    </CardDescription>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      {event.time && (
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                      )}
                      {typeof event.participants === "number" && (
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{event.participants} participants</span>
                        </div>
                      )}
                    </div>
                    {event.outcome && (
                      <div className="mt-2 p-2 bg-muted rounded text-sm">
                        <strong>Outcome:</strong> {event.outcome}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        {/* Opportunities */}
        <TabsContent value="opportunities" className="space-y-6">
          <div className="flex items-center justify-between">
            {/* input */}
            <div className="flex items-center space-x-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search opportunities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64"
              />
            </div>

            <div className="flex items-center justify-center gap-5">
              {/* reload */}
              <Button onClick={() => fetchOpportunities()}>
                <RefreshCw className="h-4 w-4" />
                Reload
              </Button>
              {/* add opportunity */}
              <Dialog
                open={isOpportunityDialogOpen}
                onOpenChange={setIsOpportunityDialogOpen}
              >
                <DialogTrigger asChild>
                  <Button onClick={() => setEditingOpportunity(null)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Opportunity
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>
                      {editingOpportunity
                        ? "Edit Opportunity"
                        : "Create New Opportunity"}
                    </DialogTitle>
                    <DialogDescription>
                      {editingOpportunity
                        ? "Update the opportunity details below."
                        : "Fill in the details to create a new opportunity."}
                    </DialogDescription>
                  </DialogHeader>
                  <form
                    action={
                      editingOpportunity
                        ? handleUpdateOpportunity
                        : handleCreateOpportunity
                    }
                  >
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="title">Title</Label>
                          <Input
                            id="title"
                            name="title"
                            defaultValue={editingOpportunity?.title || ""}
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="organization">Organization</Label>
                          <Input
                            id="organization"
                            name="organization"
                            defaultValue={
                              editingOpportunity?.organization || ""
                            }
                            required
                          />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          name="description"
                          defaultValue={editingOpportunity?.description || ""}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="type">Type</Label>
                          <Input
                            id="type"
                            name="type"
                            defaultValue={editingOpportunity?.type || ""}
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="deadline">Deadline</Label>
                          <Input
                            id="deadline"
                            name="deadline"
                            defaultValue={editingOpportunity?.deadline || ""}
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="location">Location</Label>
                          <Input
                            id="location"
                            name="location"
                            defaultValue={editingOpportunity?.location || ""}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="tags">Tags (comma separated)</Label>
                        <Input
                          id="tags"
                          name="tags"
                          defaultValue={
                            editingOpportunity?.tags?.join(", ") || ""
                          }
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="featured"
                          name="featured"
                          defaultChecked={editingOpportunity?.featured || false}
                          className="rounded"
                        />
                        <Label htmlFor="featured">Featured opportunity</Label>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">
                        {editingOpportunity
                          ? "Update Opportunity"
                          : "Create Opportunity"}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="grid gap-4">
            {loading ? (
              <div className="text-center py-8">Loading opportunities...</div>
            ) : opportunities.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No opportunities found
              </div>
            ) : (
              filteredOpportunities.map((opportunity) => (
                <Card key={opportunity._id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg flex items-center gap-2">
                          {opportunity.title}
                          {opportunity.featured && (
                            <Badge variant="default">Featured</Badge>
                          )}
                        </CardTitle>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">{opportunity.type}</Badge>
                          {opportunity.tags?.map((tag) => (
                            <Badge key={tag} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {/* edit */}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setEditingOpportunity(opportunity);
                            setIsOpportunityDialogOpen(true);
                          }}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        {/* delete */}
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Delete Opportunity
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete this
                                opportunity? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() =>
                                  handleDeleteOpportunity(opportunity._id!)
                                }
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-3">
                      {opportunity.description}
                    </CardDescription>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <span className="font-medium">Organization:</span>
                        <span>{opportunity.organization}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{opportunity.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Deadline: {opportunity.deadline}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        {/* Gallery */}
        <TabsContent value="gallery" className="space-y-6">
          <div className="flex items-center justify-between">
            {/* input */}
            <div className="flex items-center space-x-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search gallery..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64"
              />
            </div>

            <div className="flex items-center justify-center gap-5">
              {/* reload */}
              <Button onClick={() => fetchGallery()}>
                <RefreshCw className="h-4 w-4" />
                Reload
              </Button>
              {/* add item */}
              <Dialog
                open={isGalleryDialogOpen}
                onOpenChange={setIsGalleryDialogOpen}
              >
                <DialogTrigger asChild>
                  <Button onClick={() => setEditingGalleryItem(null)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Gallery Item
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>
                      {editingGalleryItem
                        ? "Edit Gallery Item"
                        : "Create New Gallery Item"}
                    </DialogTitle>
                    <DialogDescription>
                      {editingGalleryItem
                        ? "Update the gallery item details below."
                        : "Fill in the details to create a new gallery item."}
                    </DialogDescription>
                  </DialogHeader>
                  <form
                    action={
                      editingGalleryItem
                        ? handleUpdateGalleryItem
                        : handleCreateGalleryItem
                    }
                  >
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          name="title"
                          defaultValue={editingGalleryItem?.title || ""}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          name="description"
                          defaultValue={editingGalleryItem?.description || ""}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="image">Image URL</Label>
                        <Input
                          id="image"
                          name="image"
                          defaultValue={editingGalleryItem?.image || ""}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="link">Link</Label>
                        <Input
                          id="link"
                          name="link"
                          defaultValue={editingGalleryItem?.link || ""}
                          required
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">
                        {editingGalleryItem
                          ? "Update Gallery Item"
                          : "Create Gallery Item"}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              <div className="text-center py-8 col-span-full">
                Loading gallery...
              </div>
            ) : filteredGallery.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground col-span-full">
                No gallery items found
              </div>
            ) : (
              filteredGallery.map((item) => (
                <Card key={item._id} className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-48 w-full object-cover"
                  />
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{item.title}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setEditingGalleryItem(item);
                            setIsGalleryDialogOpen(true);
                          }}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Delete Gallery Item
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete this gallery
                                item? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() =>
                                  handleDeleteGalleryItem(item._id!)
                                }
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                    <div className="mt-4">
                      <Button asChild variant="link" className="p-0 h-auto">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View More
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPage;