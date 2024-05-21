import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import * as React from 'react'

import { Button } from './ui/button'

export interface IPaginationProps {
  pageIndex: number
  totalPages: number
  perPage: number
}

export function Pagination({
  pageIndex,
  totalPages,
  perPage,
}: IPaginationProps) {
  const pages = Math.ceil(totalPages / perPage) || 1
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalPages} item(s)
      </span>
      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Página {pageIndex + 1} de {pages}
          <div className="flex items-center gap-2">
            <Button variant="outline" className="h-8 w-8 p-0">
              <ChevronsLeft className="h-4 w-4" />
              <span className="sr-only">Primeira página</span>
            </Button>
            <Button variant="outline" className="h-8 w-8 p-0">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Página anterior</span>
            </Button>
            <Button variant="outline" className="h-8 w-8 p-0">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Próxima página</span>
            </Button>
            <Button variant="outline" className="h-8 w-8 p-0">
              <ChevronsRight className="h-4 w-4" />
              <span className="sr-only">Ultima página</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
