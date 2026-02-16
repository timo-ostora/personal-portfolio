import { cn } from "@/lib/utils"


export default function Corner({className,backgound, position = 'top-left', children, ...Props}: 
  {className:string ,backgound: string, position : 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right', children: React.ReactNode}) {

  const positionStyles = {
    'top-left': { 
      top: 0, 
      left: 0,
      borderBottomRightRadius: '20px',
      padding: '4px 12px 8px 4px',
      edgesPosition: [
        { bottom: -20, left: 0 },
        { top: 0, right: -20 }
      ]
    },
    'top-right': {
      top: 0, 
      right: 0,
      borderBottomLeftRadius: '20px',
      padding: '4px 4px 8px 12px',
      edgesPosition: [
        { bottom: -20, right: 0, rotate: '90deg'},
        { top: 0, left: -20, rotate: '90deg' }
      ]
    },
    'bottom-left': {
      bottom: 0, 
      left: 0,
      borderTopRightRadius: '20px',
      padding: '8px 12px 4px 4px',
      edgesPosition: [
        { top: -20, left: 0, rotate: '-90deg' },
        { bottom: 0, right: -20, rotate: '-90deg' }
      ]
    },
    'bottom-right': {
      bottom: 0, 
      right: 0,
      borderTopLeftRadius: '20px',
      padding: '8px 4px 4px 12px',
      edgesPosition: [
        { top: -20, right: 0, rotate: '180deg' },
        { bottom: 0, left: -20, rotate: '180deg' }
      ]
    },
  }
  return <>
    <div className={cn('absolute',className)} style={positionStyles[position]} {...Props}>
      
        {
          positionStyles[position].edgesPosition.map((style, index) => (
            <div key={index} className="absolute" style={style}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L0 20C0 8.95431 8.95431 0 20 0L0 0Z" fill="var(--muted)"/>
              </svg>
            </div>
          ))
        }

        {children}
      </div>
  </>
}