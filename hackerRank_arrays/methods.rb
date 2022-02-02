# def prime? (num)
#     return true if (num == 2 || num ==3) 
#      return true if (6*num)
    
#     return true
# end

def prime?(num)
#    return true if num == 2 
#    return false if num == 0 
#     i = 2
    
#     round =  num > 20 ? num/2 : num
#     while i <= round do
#          condition = num%i == 0
#         return !condition
#         i+=1
#     end

# (num==1) ? false:(2...num).none? {|t| num%t==0}

    # Prime.instance.prime?(num)
end

p prime?(3)

p prime?(7)

p prime?(370)

p prime?(0)

p prime?(1000)