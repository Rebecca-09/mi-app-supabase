import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://nafvtdwbchmrdyrzijme.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hZnZ0ZHdiY2htcmR5cnppam1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM0OTk4OTMsImV4cCI6MjEwOTA3NTg5M30.EZdWYqdAkvBtlyr1KRpzQ_D5V2Uk2K7OzHCheslxbsw'
const supabase = createClient(supabaseUrl, supabaseKey)
async function obtenerEstudiantes() {
 const { data, error } = await supabase
 .from('estudiantes')
 .select('*')
 if (error) {
 console.log('Error:', error)
 } else {
 console.log('Datos:', data)
 }
}
obtenerEstudiantes()