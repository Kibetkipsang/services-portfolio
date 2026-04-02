// src/components/ResponsiveServiceCard.tsx
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PremiumButton } from "@/components/ui/premium-button";
import { motion } from "framer-motion";
import { Sparkles, Clock, CheckCircle2 } from "lucide-react";
import { type Service } from "@/types";

interface ResponsiveServiceCardProps extends Service {
  onBookNow?: () => void;
}

export function ResponsiveServiceCard({
  name,
  price,
  duration,
  description,
  popular,
  features = [],
  onBookNow
}: ResponsiveServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Card className="relative overflow-hidden h-full bg-[var(--bg)] border-[var(--border)] shadow-lg hover:shadow-xl transition-all duration-300">
        {popular && (
          <div className="absolute top-3 right-3 z-10">
            <Badge className="bg-accent text-white border-0 shadow-md px-2 py-0.5 sm:px-3 sm:py-1 text-xs">
              <Sparkles className="w-3 h-3 mr-1" />
              Popular
            </Badge>
          </div>
        )}

        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--text-h)]">
            {name}
          </CardTitle>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[var(--text)]">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            {duration}
          </div>
        </CardHeader>

        <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0 space-y-3 sm:space-y-4">
          <p className="text-xs sm:text-sm text-[var(--text)] leading-relaxed">{description}</p>

          {features.length > 0 && (
            <div className="space-y-1.5 sm:space-y-2">
              {features.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[var(--text)]">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                  <span className="truncate">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </CardContent>

        <CardFooter className="p-4 sm:p-6 pt-0 flex items-center justify-between gap-2">
          <div>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-accent">
              {price}
            </span>
          </div>
          <PremiumButton variant="default" size="sm" onClick={onBookNow}>
            Book
          </PremiumButton>
        </CardFooter>
      </Card>
    </motion.div>
  );
}