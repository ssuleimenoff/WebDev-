def split_and_join(line):
    a = list(line.split())
    a = "-".join(a)
    return a

if __name__ == '__main__':
    line = input()
    result = split_and_join(line)
    print(result)