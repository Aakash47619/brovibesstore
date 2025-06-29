import { CategoryPage } from "@/components/category-page"
import { notFound } from "next/navigation"

const categories = {
  tops: {
    name: "Tops",
    description: "Stylish shirts, t-shirts, and hoodies",
    products: [
      {
        id: 1,
        name: "Urban Streetwear Hoodie",
        image: "/placeholder.svg?height=300&width=300",
        description: "Premium quality hoodie with urban street style design",
      },
      {
        id: 2,
        name: "Vintage Graphic Tee",
        image: "/placeholder.svg?height=300&width=300",
        description: "Classic vintage design with comfortable cotton blend",
      },
      {
        id: 3,
        name: "Oversized Crew Neck",
        image: "/placeholder.svg?height=300&width=300",
        description: "Relaxed fit crew neck perfect for casual wear",
      },
      {
        id: 4,
        name: "Long Sleeve Basic",
        image: "/placeholder.svg?height=300&width=300",
        description: "Essential long sleeve tee for layering",
      },
      {
        id: 5,
        name: "Polo Shirt Classic",
        image: "/placeholder.svg?height=300&width=300",
        description: "Timeless polo shirt for smart casual occasions",
      },
      {
        id: 6,
        name: "Tank Top Summer",
        image: "/placeholder.svg?height=300&width=300",
        description: "Lightweight tank top perfect for summer",
      },
    ],
  },
  bottoms: {
    name: "Bottoms",
    description: "Comfortable jeans, shorts, and pants",
    products: [
      {
        id: 7,
        name: "Comfort Fit Joggers",
        image: "/placeholder.svg?height=300&width=300",
        description: "Ultra-comfortable joggers for everyday wear",
      },
      {
        id: 8,
        name: "Slim Fit Jeans",
        image: "/placeholder.svg?height=300&width=300",
        description: "Classic slim fit jeans with premium denim",
      },
      {
        id: 9,
        name: "Cargo Shorts",
        image: "/placeholder.svg?height=300&width=300",
        description: "Functional cargo shorts with multiple pockets",
      },
      {
        id: 10,
        name: "Chino Pants",
        image: "/placeholder.svg?height=300&width=300",
        description: "Versatile chino pants for casual and formal wear",
      },
      {
        id: 11,
        name: "Track Pants",
        image: "/placeholder.svg?height=300&width=300",
        description: "Athletic track pants with moisture-wicking fabric",
      },
      {
        id: 12,
        name: "Denim Shorts",
        image: "/placeholder.svg?height=300&width=300",
        description: "Classic denim shorts for summer style",
      },
    ],
  },
  "cord-sets": {
    name: "Cord Sets",
    description: "Coordinated outfits for the perfect look",
    products: [
      {
        id: 13,
        name: "Casual Cord Set",
        image: "/placeholder.svg?height=300&width=300",
        description: "Matching top and bottom set for effortless style",
      },
      {
        id: 14,
        name: "Athletic Cord Set",
        image: "/placeholder.svg?height=300&width=300",
        description: "Performance wear set perfect for workouts",
      },
      {
        id: 15,
        name: "Lounge Cord Set",
        image: "/placeholder.svg?height=300&width=300",
        description: "Comfortable loungewear set for relaxing at home",
      },
      {
        id: 16,
        name: "Summer Cord Set",
        image: "/placeholder.svg?height=300&width=300",
        description: "Lightweight summer set with breathable fabric",
      },
      {
        id: 17,
        name: "Formal Cord Set",
        image: "/placeholder.svg?height=300&width=300",
        description: "Elegant coordinated set for special occasions",
      },
      {
        id: 18,
        name: "Street Style Set",
        image: "/placeholder.svg?height=300&width=300",
        description: "Urban street style coordinated outfit",
      },
    ],
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const category = categories[slug as keyof typeof categories]

  if (!category) {
    notFound()
  }

  return <CategoryPage category={category} slug={slug} />
}

export async function generateStaticParams() {
  return [{ slug: "tops" }, { slug: "bottoms" }, { slug: "cord-sets" }]
}
